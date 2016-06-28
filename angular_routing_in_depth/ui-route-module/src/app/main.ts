/// <reference path="./app.d.ts" />

import 'lodash';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'angular';
import 'angular-ui-router';

import * as controllers from './controllers';
import * as models from './models';
import * as services from './services';
import * as serviceMocks from './serviceMocks';


let appModules:string[] = [
  'ui.router',
  controllers.moduleName,
  models.moduleName,
  services.moduleName,
];

var isDevMode = true;
if(isDevMode) {
  appModules.push(serviceMocks.moduleName);
}

console.log('initializing app...');
let app = angular.module('app', appModules);

app.config(['$logProvider', '$stateProvider', '$urlRouterProvider', function(
  $logProvider:angular.ILogProvider, 
  $stateProvider:angular.ui.IStateProvider,
  $urlRouterProvider:angular.ui.IUrlRouterProvider) {

  $logProvider.debugEnabled(true);

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: require('./templates/home.html'),
      controller: controllers.HomeController,
      controllerAs: 'vm'
    });

}]);

