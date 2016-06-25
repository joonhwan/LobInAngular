"use strict";
///<reference path="../typings/index.d.ts"/>
//import 'bootstrap/dist/css/bootstrap.css';
require('bootstrap');
require('jquery');
var angular = require('angular');
require('./style.css');
var app = angular.module("movieApp", []);
app.controller('mainController', function () {
    this.message = "hello angular!";
});
console.log("movieApp module initialized : " + app);
//# sourceMappingURL=main.js.map