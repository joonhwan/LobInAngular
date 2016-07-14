/// <reference path="../app.d.ts" />
"use strict";
var View = require('./movieRating.component.html');
var Controller = (function () {
    function Controller() {
        this.entries = [];
    }
    // 처음 활성화 될때.
    Controller.prototype.$onInit = function () {
        this.entries = new Array(this.value);
    };
    // 먼가 값이 바뀔때
    Controller.prototype.$onChanges = function () {
        this.entries = new Array(this.value);
    };
    return Controller;
}());
function registerMovieRatingsComponent(app) {
    app.component("movieRating", {
        bindings: {
            value: "<"
        },
        transclude: true,
        template: View,
        controller: Controller,
        controllerAs: 'vm'
    });
}
exports.__esModule = true;
exports["default"] = registerMovieRatingsComponent;
//# sourceMappingURL=movieRating.component.js.map