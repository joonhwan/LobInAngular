import './vendor';
import {gridViewTest, comboBoxTest} from './components';

console.log('running..');

let app = angular.module('app', ['jqwidgets'])

app
  .component('gridViewTest', gridViewTest)
  .component('comboBoxTest', comboBoxTest)
  ;

$(document).ready(() => {
  angular.bootstrap(document, ['app']);
});
