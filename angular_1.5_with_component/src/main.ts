/// <reference path="app.d.ts" />

import 'bootstrap/dist/css/bootstrap.css';
import 'angular';
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
