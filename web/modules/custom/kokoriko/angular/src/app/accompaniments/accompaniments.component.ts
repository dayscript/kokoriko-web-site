import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule,HttpHeaders  } from "@angular/common/http";
import {  FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import * as $ from 'jquery';
declare var Drupal: any;
declare var drupalSettings: any;

@Component({
  selector: 'block-accompaniments',
  templateUrl: './accompaniments.component.html',
  styleUrls: ['./accompaniments.component.css']
})
export class AccompanimentsComponent implements OnInit {

  user              : any;
  incentives        : any;
  redemption_value  : any;
  redemption_last   : any;
  invoice_last      : any;
  errors            : any;
  redemption        : any;
  api               : any;
  headers           : any;
  update_entity     = true;
  profileForm       : any;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.user = drupalSettings.kokoriko.kokorikoJS
    if(this.user){
      this.setUserValidator(true);
    }

    this.api = 'https://incentives.demodayscript.com/api'; //'http://incentives.kokoriko.local:8000/api';//
    this.errors = null;
    this.redemption = null;
    this.redemption_value = 0


  }

  public setUser ( user ) {
    this.user = user;

  }

  public getUser(){
    return this.user;
  }

  public setUserValidator(value : boolean){
    this.user.validator = value;
  }

  public getUserValidation(){
    return this.user.validator;
  }

  public setRedemptionLast( data ){
    this.redemption_last = data;
  }
  public getRedemptionLast(){
    return this.redemption_last;
  }

  public setRedemptionValue( data ){
    this.redemption_value = data;
  }
  public getRedemptionValue(){
    return this.redemption_value
  }

  public setInvoiceLast( data ){
    this.invoice_last = data;
  }
  public getInvoiceLast(){
    return this.invoice_last;
  }

  public setIncentivesApi( data ){
    this.api = data;
  }

  public getIncentivesApi(){
    return this.api;
  }

  public setIncentives( data ){
    if( typeof data.entity !== 'undefined'){
      this.incentives = data.entity;
    }else{
      this.incentives = null;
    }


  }

  public getIncentives(){
    return this.incentives
  }

  public getTotalPoints(){
    if( typeof this.incentives !== 'undefined' ){
      return this.incentives.totalpoints
    }
    return false;
  }
  public setTotalPoints( value ){
    this.incentives.totalpoints = value;
  }

  public getPointsOvercome(){
    if( typeof this.incentives !== 'undefined' ){
      return this.incentives.points_overcome.toString();
    }else{
      return false;
    }
  }

  public setPointsOvercome( value ){
    this.incentives.points_overcome = value;
  }


  public setHeaders(){
    const header = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, PUT, PATCH, DELETE, OPTIONS',
        'Access-Control-Allow-Origin': '*'

      };

    this.headers = new HttpHeaders(header);
  }

  public getHeaders(){
    return this.headers;
  }


  ngOnInit() {
    this.setHeaders();
    setTimeout( ()=> {
      this.run();

    }, 500)




  }


  public run(){
    this.setRedemptionValue(0);
    if( this.getUserValidation() ){
        this.http.get( this.api + "/entities/" + this.user.field_no_identificacion,this.headers)
              .subscribe(
                  data => {
                      this.incentives = data;

                  },
                  error => {
                    this.errors = error;
                    console.log("error", this.errors);
                  },
                  ()    => {
                    this.errors = null;
                    if(this.incentives.redemptions.length != 0 ){
                      this.redemption_last = this.incentives.redemptions[this.incentives.redemptions.length - 1].created_at;

                    }
                    if(this.incentives.invoices.length != 0 ){
                      this.invoice_last = this.incentives.invoices[this.incentives.invoices.length - 1].created_at;
                    }

                    this.incentives.points  = (this.incentives.points <= 0) ? 0:this.incentives.points;

                    this.updateEntity();
                    this.buidForm();

                  }
              );

      }else{
        console.error('User data not is valid!', this.user);
      }
  }

  public updateEntity(){
    if(this.update_entity){
      this.user.zoho_lead_to_contact = 1;
      this.http.put( this.api +"/entities/"+this.incentives.id,this.user,this.headers)
            .subscribe(
                data => {
                    console.log("PATCH Request is successful ", data);
                },
                error => {
                    this.errors = error;
                    console.log("error", this.errors);
                },
                () => {
                  this.run();
                }
            );
      }
      this.update_entity = false;
  }

  public onSubmit(){
    console.log('request: ',this.profileForm.value)
    this.http.post( this.api +"/redemptions",this.profileForm.value,this.headers)
         .subscribe(
             data => {
                 this.redemption = data;
                 this.errors = null;
                 },
             error => {
                 this.errors = error.error;
                 console.log("error", this.errors);
             },
             ()=>{
                console.log('response:', this.redemption)
                 this.run();
             }
         );
    }

  public getDate(){
    var d = new Date();
    d.setDate(d.getDate() + 15);
    return d;
  }

  public buidForm(){

    this.profileForm = this.fb.group({
      entity_id:[this.incentives.id
      ],
      value: [
        null,
        Validators.required,
      ],
    });
  }


  public getInformationPoints(){
    let points = [];


    this.incentives.entity.forEach(
      (item,key) => {
        let data = {
          date : '',
          value: 0,
          points: 0,
          invoice_code: '',
          restaurant_code: '',
          description: '',
        }
        item.entity_information.forEach( (element,key) => {
            data.value += parseInt(element.value);
            data.date  = element.invoice_date_up;
            data.restaurant_code = element.restaurant_code;
        });
        data.points          = data.value / 1000;
        data.description     = 'Acomulacion por compras';
        data.invoice_code    = item.identificacion;
        points.push(data);
      }
    );

    this.incentives.point_values.forEach(
      (item,key) => {
        let data = {
          date : '',
          value: 0,
          points: 0,
          invoice_code: '',
          restaurant_code: '',
          description: '',
        }
        data.date            = item.created_at;
        data.value           = item.value;
        data.points          = item.points;
        data.description     = item.description;
        data.invoice_code    = null;
        data.restaurant_code = null;
        points.push(data);
      }
    );
    console.log(points);
    return points;
  }


}
