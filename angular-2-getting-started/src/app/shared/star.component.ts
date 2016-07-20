import {Component, ViewChild, OnInit, OnChanges} from '@angular/core';

var html = require('./star.component.html');

@Component({
  selector:'apm-star',
  template: html
})
export class StarComponent implements OnInit, OnChanges {
  @ViewChild('star-rating-edit') starRatingEdit : HTMLElement
  ngOnInit():void {
    var $starRatingEdit = $(this.starRatingEdit) as any;
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