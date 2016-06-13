/// <reference path="../../typings/tsd.d.ts"/>

import angular from "angular"; // angular내 모든 외부 노출 객체를 angular로
// 코드에서 직접 사용하지는 않지만, loading.
import "angular-material";
 // 강제 css loading(jspm css plugin필요.)
import "angular-material/angular-material.css!";
// app code
import "../assets/app.css!";

import {MainController} from "./controllers/mainController";
import {UserService} from "./services/userService";

namespace ContactManagerApp {

  var appModule = angular
  .module("contactManagerApp", [
    "ngMaterial"
  ]);

  appModule.controller("mainController", MainController);
  appModule.service("userService", UserService);
  console.log("After defining controller...");
}
