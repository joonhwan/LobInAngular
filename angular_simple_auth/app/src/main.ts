/// <reference path="../../typings/tsd.d.ts" />

import * as angular from 'angular';
import 'angular-route';
import 'angular-cookies';
import 'bootstrap/css/bootstrap.min.css!';
import 'font-awesome/css/font-awesome.min.css!';

//import {ILoginRootScopeService, ILoginGlobalData, LoginGlobalData} from './services/loginRootScopeService';

// declare modules
import './login';
import './home';
import './register';
import './services/serviceModule';
import {ILocalAuthStoreService} from './services/localAuthStoreService';

console.log("loading main module...");

angular
    .module("AngularSimpleAuthApp", [
        'serviceModule',
        'userServiceMock',
        'login',
        'home',
        'register',
        'ngRoute',
    ])
    .config(['$routeProvider', function ($routeProvider: ng.route.IRouteProvider) {
        $routeProvider
            .when('/login', {
                controller: 'loginController',
                controllerAs: 'vm',
                templateUrl: 'app/views/login.html'
                //hideMenus: true
            })
            .when('/register', {
                controller: 'registerController',
                controllerAs: 'vm',
                templateUrl: 'app/views/register.html'
            })
            .when('/', {
                controller: 'homeController as vm', // 별도의 controllerAs 말고..한번에.
                templateUrl: 'app/views/home.html'
            })
            .otherwise({
                redirectTo: '/login'
            })
            ;
    }])
    .run(['$rootScope', '$location', '$http', 'localAuthStoreService',
        function (
            $rootScope: angular.IRootScopeService,
            $location: angular.ILocationService,
            $http: angular.IHttpService,
            localAuthStoreService:ILocalAuthStoreService
            ) {

            console.log("configure root scope...");
    
            $rootScope.$on('$locationChangeStart', function (event, next, current) {
                
                var isNonRestrictedPage = _.find(['/login', '/register'], s => s===$location.path());
                var loggedIn = localAuthStoreService.get();
                if (!isNonRestrictedPage && !loggedIn) {
                    $location.path('/login');
                }
            });
        }]);

console.log("loaded main module");