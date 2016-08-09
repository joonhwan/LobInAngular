import 'jquery';
import 'jqwidgets-framework/jqwidgets/styles/jqx.base.css';
import 'angular';
// import 'jqwidgets-framework/jqwidgets/jqx-all';

$('#test').html("Hello");
console.log($('#test'));

// import 'jqwidgets-framework/jqwidgets/jqxcore';
// import 'jqwidgets-framework/jqwidgets/jqxangular';
// import 'jqwidgets-framework/jqwidgets/jqxbuttons';

//declare function require(path): any;
//require('jqwidgets-framework/jqwidgets/jqx-all')

class MainCtrl {
  message:string = "Hello World";
}

console.log('running..');

angular
  .module('app', [])
  .component('appView', {
    template: '<h3>Message: {{vm.message}}</h3><jqx-button></jqx-button>',
    controller: MainCtrl,
    controllerAs: 'vm'
  })
  //.controller("MainCtrl", MainCtrl)
  ;
