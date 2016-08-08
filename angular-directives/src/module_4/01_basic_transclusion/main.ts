import 'bootstrap/dist/css/bootstrap.min.css';
import * as angular from 'angular';
import * as mainCtrl from './mainCtrl';
import * as displayBox from './displayBox'

angular
  .module('app', [])
  .controller(mainCtrl)
  .directive(displayBox)
  ;

