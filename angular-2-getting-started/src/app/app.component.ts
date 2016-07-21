import { Component } from '@angular/core';
import {ProductListComponent} from './products/product-list.component';
import {ProductService} from './products/product.service';

var html = require('./app.component.html');
var css = require('./app.component.css');

@Component({
  selector: 'my-app',
  template: html,
  //styles: [css],
  directives: [ProductListComponent],
  providers: [ProductService]
})
export class AppComponent {
  appName: string = "ACME Product Management"
}