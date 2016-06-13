import {MainController} from './controllers/mainController';
import * as angular from 'angular';

namespace ContactManagerApp {
  angular
    .module('contactManagerApp', ['ngMaterial'])
    .controller('mainController', MainController)
    ;
}
