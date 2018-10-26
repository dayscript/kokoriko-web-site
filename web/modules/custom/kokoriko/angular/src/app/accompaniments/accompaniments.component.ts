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

  elements: any;
  incentives: any;
  redemption_value:any = 0;
  redemption_last:any;
  invoice_last:any;
  errors: any = null;


  constructor(private http: HttpClient) {
    this.elements = drupalSettings.kokoriko.kokorikoJS
    this.elements.validator = true;
    console.log(this.elements);
  }

  ngOnInit() {
    this.validateData();
    this.getData();
  }


  getData(){
    if(this.elements.validator){
        this.http.get("https://incentives.demodayscript.com/api/entities/" + this.elements.field_no_identificacion)
              .subscribe(
                  data => {
                      this.incentives = data;
                      this.redemption_value = this.incentives.points;
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

  validateData(){
    if(this.elements.field_no_identificacion == null){
      console.log('property field_no_identificacion not exist!');
      this.elements.validator = false;
    }
  }

  redemptionPost(){
    this.http.post("https://incentives.demodayscript.com/api/redemptions",{'entity_id':this.incentives.entity.id,'value':this.redemption_value})
          .subscribe(
              data => {
                  this.incentives = data;
                  this.errors = null;
                  console.log("POST Request is successful ", data);
                  this.getData();
              },
              error => {
                  this.errors = error;
                  console.log("error", this.errors);
              }
          );

        }

  createEntity(){
    this.http.post("https://incentives.demodayscript.com/api/entities",{'identification':this.elements.field_no_identificacion,'name':this.elements.field_nombres})
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

    getDate(){
      var d = new Date();
      d.setDate(d.getDate() + 15);
      return d;
    }

}
