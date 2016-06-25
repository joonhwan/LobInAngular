///<reference path="../typings/index.d.ts"/>
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import * as angular from 'angular';

import './style.css';

let app = angular.module("movieApp", []);
app.controller('mainController', function() {
  this.message = "hello angular!";
});
console.log("movieApp module initialized : " + app);
