import angular from 'angular';
import './loginService';
import './userService';
import './userServiceMock';

var serviceModule:angular.IModule = null;
export function getServiceModule() : angular.IModule {
  if(!serviceModule) {
    console.log("creating service modules...");
    serviceModule = angular.module('serviceModule', []);
  }
  return serviceModule;
}
