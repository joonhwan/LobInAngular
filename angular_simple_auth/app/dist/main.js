/// <reference path="../../typings/tsd.d.ts" />
System.register(['angular', 'angular-route', 'angular-cookies', 'bootstrap/css/bootstrap.min.css!', 'font-awesome/css/font-awesome.min.css!', './login', './home', './services/serviceModule'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {}],
        execute: function() {
            console.log("loading main module...");
            angular
                .module("AngularSimpleAuthApp", [
                'serviceModule',
                'login',
                'home',
                'ngRoute',
                'ngCookies'
            ])
                .config(['$routeProvider', function ($routeProvider) {
                    $routeProvider
                        .when('/login', {
                        controller: 'loginController',
                        controllerAs: 'vm',
                        templateUrl: 'app/views/login.html'
                    })
                        .when('/register', {
                        controller: 'registerController',
                        controllerAs: 'vm',
                        templateUrl: 'app/views/register.html'
                    })
                        .when('/', {
                        controller: 'homeController as vm',
                        templateUrl: 'app/views/home.html'
                    })
                        .otherwise({
                        redirectTo: '/login'
                    });
                }])
                .run(['$rootScope', '$location', '$cookieStore', '$http',
                function ($rooteScope, $location, $cookieStore, $http) {
                    // keep user logged in after page refresh
                    var anyRootScope = $rooteScope;
                    anyRootScope.globals = $cookieStore.get('globals') || {};
                    // $rooteScope.globals = <ILoginGlobalData><any>$cookieStore.get('globals') || new LoginGlobalData();
                    $rooteScope.$on('$locationChangeStart', function (event, next, current) {
                        // redirect to login page if not logged in
                        if ($location.path() !== '/login' && !anyRootScope.globals.currentUser) {
                            $location.path('/login');
                        }
                    });
                }]);
        }
    }
});
//# sourceMappingURL=main.js.map