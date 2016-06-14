/// <reference path="../../typings/tsd.d.ts" />

import * as angular from 'angular';
import 'angular-route';
import 'angular-cookies';
import 'bootstrap/css/bootstrap.min.css!'
import 'font-awesome/css/font-awesome.min.css!'

//import {ILoginRootScopeService, ILoginGlobalData, LoginGlobalData} from './services/loginRootScopeService';

// declare modules
import './login';
import './home';
import './services/serviceModule';

console.log("loading main module...");

angular
    .module("AngularSimpleAuthApp", [
        'serviceModule',
        'login',
        'home',
        'ngRoute',
        'ngCookies'
    ])
    .config(['$routeProvider', function ($routeProvider: ng.route.IRouteProvider) {
        $routeProvider
            .when('/login', {
                controller: 'loginController as vm',
                templateUrl: 'app/views/login.html',
                //hideMenus: true
            })
            .when('/', {
                controller: 'homeController as vm',
                templateUrl: 'app/views/home.html'
            })
            .otherwise({
                redirectTo: '/login'
            })
            ;
    }])
    .run(['$rootScope', '$location', '$cookieStore', '$http',
        function ($rooteScope: angular.IRootScopeService,
            $location: angular.ILocationService,
            $cookieStore: ng.cookies.ICookiesService,
            $http: angular.IHttpService) {

            // keep user logged in after page refresh
            var anyRootScope = <any>$rooteScope;
            anyRootScope.globals = $cookieStore.get('globals') || {};
            // $rooteScope.globals = <ILoginGlobalData><any>$cookieStore.get('globals') || new LoginGlobalData();

            $rooteScope.$on('$locationChangeStart', function (event, next, current) {
                // redirect to login page if not logged in
                if ($location.path() !== '/login' && !anyRootScope.globals.currentUser) {
                    $location.path('/login');
                }
            });
        }]);