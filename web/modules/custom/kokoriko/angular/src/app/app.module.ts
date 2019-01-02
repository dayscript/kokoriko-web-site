import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AccompanimentsComponent } from './accompaniments/accompaniments.component';
import { AddressesComponent } from './addresses/addresses.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/es';
import localeFrExtra from '@angular/common/locales/extra/es';

registerLocaleData(localeFr, 'es-CO', localeFrExtra);

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
  providers: [HttpClient, HttpClientModule, {provide: LOCALE_ID, useValue: "es-CO" }],
  bootstrap: [
    AccompanimentsComponent,
    // AddressesComponent
  ]
})
export class AppModule { }
