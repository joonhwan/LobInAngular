import 'jquery';
import 'jqwidgets-framework/jqwidgets/styles/jqx.base.css';
import 'angular';

//jQuery = $;
window['jQuery'] = $;

//require('jqwidgets-framework/jqwidgets/jqx-all');
import 'jqwidgets-framework/jqwidgets/jqx-all';

// import 'jqwidgets-framework/jqwidgets/jqxcore';
// import 'jqwidgets-framework/jqwidgets/jqxangular';
// import 'jqwidgets-framework/jqwidgets/jqxbuttons';

// declare function require(path): any;
// require('jquery');

$('#test').html("Hello");
console.log($('#test'));

console.log($);
//console.log(window);

$(document).ready(() => {
  console.log($);
  //console.log(window);
});
//require('jqwidgets-framework/jqwidgets/jqxcore-pretty');

class MainCtrl {
  message:string = "Hello World";
}

console.log('running..');

angular
  .module('app', ['jqwidgets'])
  .component('appView', {
    template: '<h3>Message: {{vm.message}}</h3><jqx-button>Oh Yeah!</jqx-button>',
    controller: MainCtrl,
    controllerAs: 'vm'
  })
  //.controller("MainCtrl", MainCtrl)
  ;
