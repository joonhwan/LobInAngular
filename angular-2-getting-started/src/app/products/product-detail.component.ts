import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

let html = require('./product-detail.component.html');

@Component({
  // selector: 'apm-product-detail',
  template: html
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  pageTitle:string = "Product Detail";
  product:IProduct;
  
  private _sub: Subscription;

  constructor(
    private _route:ActivatedRoute,
    private _productService:ProductService) {

  }

  ngOnInit() {
    this._route.params.subscribe(param => {
      let id = param['id'] as number;
      if(id) {
        this._sub = this._productService.getProductById(id)
          .subscribe(product => this.product = product);
      }
    })
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

}