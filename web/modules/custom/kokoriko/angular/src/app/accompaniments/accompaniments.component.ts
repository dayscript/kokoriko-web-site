import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
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
  load: any;
  redemption_value:any = 0;
  errors: any;

  constructor(private http: HttpClient) {
    this.elements = drupalSettings.kokoriko.kokorikoJS
    this.elements.validator = true;
    this.load = false;

  }

  ngOnInit() {
    this.validateData();
    this.getData();
  }


  getData(){
    if(this.elements.validator){
        this.http.get("http://incentives.kokoriko.local:8000/api/entities/" + this.elements.field_no_identificacion)
              .subscribe(
                  data => {
                      this.incentives = data;
                      this.load= true;
                      this.errors = null;
                      console.log("GET Request is successful ", this.incentives.entity);

                  },
                  error => {
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
    this.http.post("http://incentives.kokoriko.local:8000/api/redemptions",{'entity_id':this.incentives.entity.id,'value':this.redemption_value})
          .subscribe(
              data => {
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

}
