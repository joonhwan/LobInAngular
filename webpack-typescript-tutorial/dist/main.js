"use strict";
require('font-awesome/css/font-awesome.css');
require('core-js');
var angular = require('angular');
var band_1 = require('./band');
var app = angular.module('app', []);
band_1.default(app);
// app.controller('MainController', function() {
//   this.message = 'Hello Typscript+WebPack!!';
// })
console.log("loaded app : {app}");
//# sourceMappingURL=main.js.map