//import 'bootstrap/dist/css/bootstrap.min.css';
import * as angular from 'angular';
//import {UserTile} from './userTile';
import * as mainCtrl from './mainCtrl';
import * as userTile from './userTile';
import './style.css';

//console.log(`userTile module = ${_userTile}`);
console.log(mainCtrl);
console.log(userTile)

let app = angular.module("app", []);
  
//app.controller("mainCtrl", MainCtrl);
app.controller(mainCtrl);

//app.directive("userTile", UserTile.factory())
app.directive(userTile);

