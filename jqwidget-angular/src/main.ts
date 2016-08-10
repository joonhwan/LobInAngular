import './vendor';
import {gridView} from './gridView.component';
import {gridUpdateTestView} from './gridUpdateTestView';

console.log('running..');

let app = angular.module('app', ['jqwidgets'])

app
  .component('gridView', gridView)
  .component('gridUpdateTestView', gridUpdateTestView)
  ;

$(document).ready(() => {
  angular.bootstrap(document, ['app']);
});
