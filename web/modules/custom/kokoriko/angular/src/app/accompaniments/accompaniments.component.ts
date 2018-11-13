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

  user              : any;
  incentives        : any;
  redemption_value  : any;
  redemption_last   : any;
  invoice_last      : any;
  errors            : any;
  redemption        : any;
  api               : any;
  headers           : any;

  constructor(private http: HttpClient) {
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
        // 'Content-Type': 'application/json',
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

                  }
              );

      }else{
        console.error('User data not is valid!', this.user);
      }
  }


  public redemptionPost(){
    this.http.post( this.api +"/redemptions",{'entity_id':this.incentives.id,'value':this.redemption_value},this.headers)
          .subscribe(
              data => {
                  this.redemption = data;
                  this.errors = null;
                  this.run();

              },
              error => {
                  this.errors = error;
                  console.log("error", this.errors);
              }
          );

        }

  public updateEntity(){
    this.user.zoho_lead_to_contact = 1;
    this.http.put( this.api +"/entities/"+this.incentives.id,this.user,this.headers)
          .subscribe(
              data => {
                  console.log("PATCH Request is successful ", data);
                  this.run();
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
