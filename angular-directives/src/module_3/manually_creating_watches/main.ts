import * as angular from 'angular';
import * as mainCtrl from './mainCtrl';
import * as fontScale from './fontScale';

console.log('mainctrl module -->');
console.log(mainCtrl);

console.log('fontScale module -->');
console.log(fontScale);

angular
  .module('app', [])
  .controller(mainCtrl)
  .directive(fontScale)
