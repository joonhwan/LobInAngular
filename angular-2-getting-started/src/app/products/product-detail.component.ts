import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from './product';

let html = require('./product-detail.component.html');

@Component({
  // selector: 'apm-product-detail',
  template: html
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  pageTitle:string = "Product Detail";
  product:IProduct;

  constructor(private route:ActivatedRoute) {

  }

  ngOnInit() {
    let id = this.route.params['id'];
    this.pageTitle = "Product Detail : " + id;
  }

  ngOnDestroy() {

  }

}