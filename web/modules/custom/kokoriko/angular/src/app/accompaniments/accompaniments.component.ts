import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule,HttpHeaders  } from "@angular/common/http";
import * as $ from 'jquery';
declare var Drupal: any;
declare var drupalSettings: any;

@Component({
  selector: 'block-accompaniments',
  templateUrl: './accompaniments.component.html',
  styleUrls: ['./accompaniments.component.css']
})
export class AccompanimentsComponent implements OnInit {

  user: any;
  incentives: any;
  redemption_value:any = 0;
  redemption_last:any;
  invoice_last:any;
  errors: any = null;
  redemption:any = null;
  api = 'https://incentives.demodayscript.com/api';// 'http://incentives.kokoriko.local:8000/api'; //
  headers:any;

  constructor(private http: HttpClient) {
    this.user = drupalSettings.kokoriko.kokorikoJS
    this.user.validator = true;

  }

  ngOnInit() {
    const header = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Origin': '*'
    };

    this.headers = new HttpHeaders(header);
    this.validateData();
    this.getData();
  }

  private validateData(){
    if(this.user.field_no_identificacion == null){
      console.error('property field_no_identificacion not exist!');
      this.user.validator = false;
    }
  }

  public getData(){
    if(this.user.validator){
        this.http.get( this.api +"/entities/" + this.user.field_no_identificacion,this.headers)
              .subscribe(
                  data => {
                      this.incentives = data;
                      this.errors = null;

                      if(this.incentives.entity.redemptions.length != 0 ){
                        this.redemption_last = this.incentives.entity.redemptions[this.incentives.entity.redemptions.length - 1].created_at;

                      }
                      if(this.incentives.entity.invoices.length != 0 ){
                        this.invoice_last = this.incentives.entity.invoices[this.incentives.entity.invoices.length - 1].created_at;
                      }

                      this.incentives.entity.points  = (this.incentives.entity.points <= 0) ? 0:this.incentives.entity.points;

                      console.log("GET Request is successful ", this.incentives.entity);

                  },
                  error => {
                    this.createEntity();
                    this.errors = error;
                    console.log("error", this.errors);
                  }
              );

            }
  }


  public redemptionPost(){
    this.http.post( this.api +"/redemptions",{'entity_id':this.incentives.entity.id,'value':this.redemption_value},this.headers)
          .subscribe(
              data => {
                  this.redemption = data;
                  this.errors = null;
                  this.getData();

              },
              error => {
                  this.errors = error;
                  console.log("error", this.errors);
              }
          );

        }

  public createEntity(){
    this.http.post( this.api +"/entities",this.user,this.headers)
          .subscribe(
              data => {
                  console.log("POST Request is successful ", data);
                  this.getData();
              },
              error => {
                  this.errors = error;
                  console.log("error", this.errors);
              }
          );
  }

  public getDate(){
    var d = new Date();
    d.setDate(d.getDate() + 15);
    return d;
  }

}
