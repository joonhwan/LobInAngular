import {
  Component, 
  Input, 
  Output,
  ViewChild, 
  ElementRef,
  EventEmitter, 
  OnInit, 
  OnChanges
} from '@angular/core';

import 'bootstrap-star-rating/js/star-rating';

var html = require('./star.component.html');
var css = require('bootstrap-star-rating/css/star-rating.css');

export interface StarComponentConfig {
  min?: number;
  max?: number;
  step?: number;
}

@Component({
  selector:'apm-star',
  template: html,
  styles: [css]
})
export class StarComponent implements OnInit, OnChanges {
  @ViewChild('star') element: ElementRef
  @Input() rating:number = 0;
  @Output() ratingChanged:EventEmitter<number> = new EventEmitter<number>();
  $starRatingEdit:any;

  constructor() {
  }

  ngOnInit():void {
    // var domId = '#star-rating-edit-' + this.product.id;
    // console.log('domId = ' + domId);
    
    var $starRatingEdit = $(this.element.nativeElement) as any;
    $starRatingEdit
      .val(this.rating)
      .rating({
        min: 0,
        max: 5,
        step: 0.2,
        size:'xs',
        showClear: false,
        showCaption: false
      })
      .on('rating.change', (event, value, caption) => {
        // console.log(this.rating + ' -> ' + value);
        let numericValue = Number(value);
        this.rating = isNaN(numericValue) ? 0 : numericValue
        this.ratingChanged.emit(this.rating);
      })
      ;
    this.$starRatingEdit = $starRatingEdit;
  }

  ngOnChanges():void {
    if(this.$starRatingEdit) {
      this.$starRatingEdit.rating('update', this.rating);
    }
    // console.log('starComponent.ngOnChanges : ' + this.rating);
  }
}