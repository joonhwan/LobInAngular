"use strict";
require('jQuery');
require('bootstrap');
var angular = require('angular');
var app = angular.module("movieApp", []);
app.controller('mainController', function () {
    this.message = "hello angular !!!!!!";
});
console.log("movieApp module initialized : " + app);
//# sourceMappingURL=main.js.map