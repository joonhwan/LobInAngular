import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';
import {ProductFilterPipe} from './product-filter.pipe';
import {StarComponent} from '../shared/star.component';

let html = require('./product-list.component.html');
let css = require('./product-list.component.css');

@Component({
  selector: 'apm-product-list',
  template: html,
  styles: [css],
  pipes: [ProductFilterPipe],
  directives: [StarComponent],
})
export class ProductListComponent implements OnInit {

  products: IProduct[];
  showImage:boolean;
  imageStyle = {
    'width' : '50px',
    'margin' : '2px'
  };
  listFilter: string = '';

  constructor(private productService:ProductService) {
    this.showImage = false;
    //this.products = this.productService.getProducts();
  }

  toggleImage():void {
    this.showImage = !this.showImage;
  }

  setProductRating(product, rating) {
    // console.log('setProductRating = '+ rating);
    product.rating = rating;
  }

  ngOnInit(): any {
    this.products = this.productService.getProducts();
  }
} 
