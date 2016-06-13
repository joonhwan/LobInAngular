/// <reference path="../../typings/tsd.d.ts"/>

import angular from "angular"; // angular내 모든 외부 노출 객체를 angular로
// 코드에서 직접 사용하지는 않지만, loading.
import "angular-material";
import "angular-material-icons"
 // 강제 css loading(jspm css plugin필요.)
import "angular-material/angular-material.css!";
import "angular-material-icons/angular-material-icons.css!";

// app code
import "../assets/app.css!";

import {MainController} from "./controllers/mainController";
import {UserService} from "./services/userService";

namespace ContactManagerApp {

  var appModule = angular
  .module("contactManagerApp", [
    "ngMaterial",
    "ngMdIcons"
  ]);

  appModule.controller("mainController", MainController);
  appModule.service("userService", UserService);
  appModule.config(($mdIconProvider: angular.material.IIconProvider,
                    $mdThemingProvider: angular.material.IThemingProvider) => {
    $mdIconProvider
      .defaultIconSet("app/assets/svg/avatars.svg", 128)
      .icon("menu", "app/assets/svg/menu.svg", 24);
    $mdThemingProvider.theme("default")
                        .primaryPalette("blue")
                        .accentPalette("red")
    ;
  });
  console.log("After defining controller...");
}
