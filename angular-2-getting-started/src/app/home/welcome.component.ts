import { Component } from '@angular/core';

let html = require('./welcome.component.html');

@Component({
  template: html
})
export class WelcomeComponent {
  pageTitle:string = "Welcome";
}