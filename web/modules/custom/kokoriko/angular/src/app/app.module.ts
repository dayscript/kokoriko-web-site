import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AccompanimentsComponent } from './accompaniments/accompaniments.component';
import { AddressesComponent } from './addresses/addresses.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    AccompanimentsComponent,
    // AddressesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [HttpClient, HttpClientModule],
  bootstrap: [
    AccompanimentsComponent,
    // AddressesComponent
  ]
})
export class AppModule { }
