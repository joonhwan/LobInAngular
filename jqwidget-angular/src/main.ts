import './style.css';
import './vendor';
import {gridViewTest, comboBoxTest, tabbedView} from './components';

console.log('running..');

let app = angular.module('app', ['jqwidgets'])

app
  .component('gridViewTest', gridViewTest)
  .component('comboBoxTest', comboBoxTest)
  .component('tabbedView', tabbedView)
  ;

$(document).ready(() => {
  angular.bootstrap(document, ['app']);
});
