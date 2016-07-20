import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {IProduct} from '../products/product';

var html = require('./star.component.html');

@Component({
  selector:'apm-star',
  template: html
})
export class StarComponent implements OnInit, OnChanges {
  @Input() product:IProduct;
  ngOnInit():void {
    var domId = '#star-rating-edit-' + this.product.id;
    console.log('domId = ' + domId);
    
    var $starRatingEdit = $(domId) as any;
    $starRatingEdit.rating({
      min: 0,
      max: 5,
      step: 1,
      size:'xs',
      showClear: false,
      showCaption: false
    });
    //$starRatingEdit.val("4.2");
  }
  ngOnChanges():void {
  }
}