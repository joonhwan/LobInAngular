/// <reference path="../app.d.ts" />
import * as angular from 'angular';

import {DataService} from './dataService';
import {Notifier} from './notifier';

console.log('initializing services...');

let moduleName = 'services';

angular
  .module(moduleName)
  .factory(DataService.className, DataService)
  .factory(Notifier.className, Notifier)
  ;

export { moduleName, DataService, Notifier };