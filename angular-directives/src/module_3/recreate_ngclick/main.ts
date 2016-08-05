import 'bootstrap/dist/css/bootstrap.min.css';
import * as _ from 'lodash';
import 'jquery';
import * as angular from 'angular';

class MainCtrl {
  message:string = "Click Me!";
  clickCount:number = 0;

  constructor() {
  }

  handleClick() {
    this.message = `You Clicked me ${++this.clickCount} time(s)!`;
  }
}

class MyClick implements ng.IDirective {

  constructor(private parse:ng.IParseService) {
  }

  link(scope:ng.IScope, elems:JQuery, attrs:ng.IAttributes) {
    var fn = this.parse(attrs["myClick"]);
    elems.on("click", e => {
      console.log("jquery on click: you clicked!");
      scope.$apply(scope => fn(scope));
    });
        
    fn.$inject = [];
    return fn;
  }

  static factory():ng.IDirectiveFactory  {
    let factory = ($parse:ng.IParseService):MyClick => {
      return new MyClick($parse);
    }
    return factory;
  }
}

angular.module('app', [])
  .controller("MainCtrl", MainCtrl)
  .directive("myClick", MyClick.factory())