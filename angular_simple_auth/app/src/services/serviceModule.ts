import angular from 'angular';
import './loginService';
console.log("creating service modules...");

var serviceModule:angular.IModule = null;
export function getServiceModule() : angular.IModule {
  if(!serviceModule) {
    serviceModule = angular.module('serviceModule', []);
  }
  return serviceModule;
}
