import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var Drupal : any;
declare var drupalSettings : any;

@Component({
  selector: 'block-accompaniments',
  templateUrl: './accompaniments.component.html',
  styleUrls: ['./accompaniments.component.css']
})
export class AccompanimentsComponent implements OnInit {

  elements: any;
  constructor() {
     this.elements = drupalSettings.kokoriko.kokorikoJS
   }

  ngOnInit() {
    console.log(this.elements);
  }

}
