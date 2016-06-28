/// <reference path="../app.d.ts" />
import * as angular from 'angular';
import registerDataServiceMock from './dataServiceMock';

let moduleName = 'mocks';

let module = angular
  .module('mocks', ['ngMockE2E'])
  ;
registerDataServiceMock(module);

export { moduleName };
