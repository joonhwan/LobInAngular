import { Component } from '@angular/core';
import {ProductListComponent} from './products/product-list.component';

var html = require('./app.component.html');
var css = require('./app.component.css');

@Component({
  selector: 'my-app',
  template: html,
  //styles: [css],
  directives: [ProductListComponent]
})
export class AppComponent {
  appName: string = "ACME Product Management"
}