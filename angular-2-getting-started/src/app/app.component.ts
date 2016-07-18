import { Component } from '@angular/core';
import './style.css';

var html = require('./app.component.html');
var css = require('raw!./app.component.css');

@Component({
  selector: 'my-app',
  template: html,
  styles: [css]
})
export class AppComponent {

}