/// <reference path="../app.d.ts" />
import * as angular from 'angular';

import {DataService} from './dataService';
import {Notifier} from './notifier';

console.log('initializing services...');

let moduleName = 'services';

angular
  .module(moduleName, [])
  .service(Notifier.className, Notifier)
  .service(DataService.className, DataService)
  ;

export { moduleName, DataService, Notifier };