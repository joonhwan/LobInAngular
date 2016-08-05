"use strict";
/// <reference path="../../app.d.ts" />
require('bootstrap/dist/css/bootstrap.min.css');
var angular = require('angular');
var MainCtrl = (function () {
    function MainCtrl() {
        this.user = {
            name: 'Luke Skywalker',
            address: {
                street: 'PO Box 123',
                city: 'Secret Rebel Base',
                planet: 'Yavin 4'
            },
            friends: [
                'Han',
                'Leia',
                'Chewbacca'
            ]
        };
    }
    MainCtrl.prototype.knightMe = function (user) {
        this.user.rank = 'knight';
    };
    MainCtrl.className = 'mainCtrl';
    return MainCtrl;
}());
var UserInfoCard = (function () {
    function UserInfoCard($http) {
        this.$http = $http;
        this.restrict = 'E';
        this.template = require('./userInfoCard.html');
        this.controller = MainCtrl.className;
        this.controllerAs = 'vm';
    }
    UserInfoCard.Factory = function () {
        var directive = function ($http) { return new UserInfoCard($http); };
        directive.$inject = ['$http'];
        return directive;
    };
    UserInfoCard.className = 'userInfoCard';
    return UserInfoCard;
}());
angular
    .module('app', [])
    .controller(MainCtrl.className, MainCtrl)
    .directive(UserInfoCard.className, UserInfoCard.Factory());
//# sourceMappingURL=main.js.map