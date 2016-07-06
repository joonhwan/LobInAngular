/// <reference path="./app.d.ts" />
import 'toastr/build/toastr.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import * as _ from 'lodash';
import * as $ from 'jquery';
import * as toastr from 'toastr';
import 'bootstrap';
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
    })
    .state('schools', {
      url: '/schools',
      template: require('./templates/schools.html'),
      controller: controllers.SchoolsController,
      controllerAs: 'vm'
    })
    .state('classrooms', {
      url: '/classrooms',
      template: require('./templates/classrooms.html'),
      controller:controllers.ClassroomsController,
      controllerAs: 'vm'
    })
    .state('activities', {
      url: '/activities',
      template: require('./templates/activities.html'),
      controller:controllers.ActivitiesController,
      controllerAs: 'vm'
    })
    .state('classroomSummary', {
      url: '/classrooms/{id}',
      template: require('./templates/classroomSummary.html'),
      controller:controllers.ClassroomSummaryController,
      controllerAs: 'vm'
    })
    ;
}]);

