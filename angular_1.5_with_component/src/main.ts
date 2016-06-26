/// <reference path="app.d.ts" />

import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import * as angular from 'angular';

import './style.css';


import registerMovieListComponent from './movies/movieList.component';
import registerMovieRatingComponent from './movies/movieRating.component';


let app = angular.module("movieApp", []);
app.controller('mainController', function() {
  this.message = "hello angular!";
});

registerMovieListComponent(app);
registerMovieRatingComponent(app);

console.log("movieApp module initialized : " + app);
