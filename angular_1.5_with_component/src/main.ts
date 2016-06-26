/// <reference path="app.d.ts" />

import 'bootstrap/dist/css/bootstrap.css';
import 'angular';
import 'angular-route';
import './style.css';

import registerMovieListComponent from './movies/movieList.component';
import registerMovieRatingComponent from './movies/movieRating.component';
import registerAboutComponent from './movies/about.component';

let app = angular.module("movieApp", ['ngRoute']);

registerMovieListComponent(app);
registerMovieRatingComponent(app);
registerAboutComponent(app);

app.config(['$routeProvider', ($routeProvider:ng.route.IRouteProvider) => {
  $routeProvider
    .when('/list', {
      template: '<movie-list></movie-list>'
    })
    .when('/about', {
      template: '<about></about>'
    })
    .otherwise({
      redirectTo: '/list'
    })
    ;
}]);

console.log("movieApp module initialized : " + app);
