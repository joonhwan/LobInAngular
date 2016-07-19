import { Component } from '@angular/core';
import './style.css';
import {ProductListComponent} from './products/product-list.component';

var html = require('./app.component.html');
var css = require('!raw!./app.component.css');

console.log(css);

@Component({
  selector: 'my-app',
  template: html,
  styles: [css],
  directives: [ProductListComponent]
})
export class AppComponent {
  appName: string = "ACME Product Management"
}