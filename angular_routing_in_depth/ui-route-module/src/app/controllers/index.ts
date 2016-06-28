/// <reference path="../app.d.ts" />
import * as angular from 'angular';
import {HomeController} from './homeController';

let moduleName = 'controllers';

angular.module(moduleName, [])
  .controller(HomeController.name, HomeController)
  ;

export { moduleName, HomeController as home };