/// <reference path="app.d.ts" />
"use strict";
require('bootstrap/dist/css/bootstrap.css');
require('angular');
require('angular-route');
require('./style.css');
var movieList_component_1 = require('./movies/movieList.component');
var movieRating_component_1 = require('./movies/movieRating.component');
var about_component_1 = require('./movies/about.component');
var app = angular.module("movieApp", ['ngRoute']);
movieList_component_1["default"](app);
movieRating_component_1["default"](app);
about_component_1["default"](app);
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/list', {
            template: '<movie-list></movie-list>'
        })
            .when('/about', {
            template: '<about></about>'
        })
            .otherwise({
            redirectTo: '/list'
        });
    }]);
console.log("movieApp module initialized : " + app);
//# sourceMappingURL=main.js.map