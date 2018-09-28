import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AccompanimentsComponent } from './accompaniments/accompaniments.component';
import { AddressesComponent } from './addresses/addresses.component';

@NgModule({
  declarations: [
    AccompanimentsComponent,
    AddressesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AccompanimentsComponent,
    AddressesComponent
  ]
})
export class AppModule { }
