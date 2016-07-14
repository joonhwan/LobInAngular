/// <reference path="../../app.d.ts" />
import 'bootstrap/dist/css/bootstrap.min.css';
import * as angular from 'angular';

class MainCtrl {
  static className = 'mainCtrl';

  message:string = "Hello Joonhwan";

  constructor() {
  }
}


angular
  .module('app', [])
  .controller(MainCtrl.className, MainCtrl)
  ;
