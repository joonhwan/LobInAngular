"use strict";
var mainController_1 = require('./controllers/mainController');
var angular = require('angular');
var ContactManagerApp;
(function (ContactManagerApp) {
    angular
        .module('contactManagerApp', ['ngMaterial'])
        .controller('mainController', mainController_1.MainController);
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=main.js.map