import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var Drupal : any;
declare var drupalSettings : any;

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {
  elements: any;
  constructor() {
     this.elements = drupalSettings.kokoriko.kokorikoJS
   }

  ngOnInit() {
    console.log(this.elements);
  }


private renderImage( path:string ){
  var base_path = '/sites/default/files/';
  return path.replace('public://', base_path);
}

}
