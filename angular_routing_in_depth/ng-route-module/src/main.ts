import 'jquery';
import 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import * as angular from 'angular';
import 'angular-route';

let app = angular.module('ngroute-test', ['ngRoute']);

app.config(['$logProvider', '$routeProvider',
  ($logProvider:ng.ILogProvider, $routeProvider:ng.route.IRouteProvider) => {
    $logProvider.debugEnabled(true);

    $routeProvider
      .when('/', {
        controller: function() {
            this.message = "Hello Root Page";
        },
        controllerAs: 'vm',
        template: '<h2>Root Page({{vm.message}})</h2>'
      });
  }])

console.log('app initialized');
