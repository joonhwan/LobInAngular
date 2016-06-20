import 'font-awesome/css/font-awesome.css';
import 'core-js';
import * as angular from 'angular';
import band from './band';

let app = angular.module('app', []);
band(app);

// app.controller('MainController', function() {
//   this.message = 'Hello Typscript+WebPack!!';
// })
console.log(`loaded app : {app}`);