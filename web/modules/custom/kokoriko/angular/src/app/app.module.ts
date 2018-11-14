import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AccompanimentsComponent } from './accompaniments/accompaniments.component';
import { AddressesComponent } from './addresses/addresses.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AccompanimentsComponent,
    // AddressesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient, HttpClientModule],
  bootstrap: [
    AccompanimentsComponent,
    // AddressesComponent
  ]
})
export class AppModule { }
