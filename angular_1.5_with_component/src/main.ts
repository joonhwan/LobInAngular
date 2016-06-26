/// <reference path="app.d.ts" />

import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import * as angular from 'angular';

import './style.css';
import movieListComponent from './movies/movieList.component'; 

let app = angular.module("movieApp", []);
app.controller('mainController', function() {
  this.message = "hello angular!";
});

movieListComponent(app);

console.log("movieApp module initialized : " + app);
