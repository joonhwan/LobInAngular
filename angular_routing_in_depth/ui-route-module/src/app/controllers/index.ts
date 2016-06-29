/// <reference path="../app.d.ts" />
import * as angular from 'angular';
import {HomeController} from './homeController';
import {SchoolsController} from './schoolsController';
import {ClassroomsController} from './classroomsController';
import {ActivitiesController} from './activitiesController';

let moduleName = 'controllers';

angular.module(moduleName, [])
  .controller(HomeController.className, HomeController)
  .controller(SchoolsController.className, SchoolsController)
  .controller(ActivitiesController.className, ActivitiesController)
  ;

export { 
  moduleName, 
  HomeController, 
  SchoolsController, 
  ClassroomsController, 
  ActivitiesController 
};