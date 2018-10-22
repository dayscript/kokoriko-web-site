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
  constructor(private http: HttpClient) {
    this.elements = drupalSettings.kokoriko.kokorikoJS
    this.elements.validator = true;
    

  }

  ngOnInit() {
    this.validateData();
    this.getData();
    console.log(this.elements);
  }


  getData(){
    if(this.elements.validator){
        this.http.get("http://incentives.kokoriko.local:8000/api/entities/" + this.elements.field_no_identificacion)
              .subscribe(
                  data => {
                      console.log("PUT Request is successful ", data);
                  },
                  error => {
                      console.log("error", error);
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

}
