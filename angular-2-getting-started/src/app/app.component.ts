import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {ProductListComponent} from './products/product-list.component';
import {ProductService} from './products/product.service';

var html = require('./app.component.html');
var css = require('./app.component.css');

@Component({
  selector: 'my-app',
  template: html,
  //styles: [css],
  directives: [ProductListComponent],
  providers: [ProductService, HTTP_PROVIDERS]
})
export class AppComponent {
  appName: string = "ACME Product Management"
}