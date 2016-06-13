/// <reference path="../../typings/tsd.d.ts"/>
System.register(["angular", "angular-material", "angular-material-icons", "angular-material/angular-material.css!", "angular-material-icons/angular-material-icons.css!", "../assets/app.css!", "./controllers/mainController", "./services/userService"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular_1, mainController_1, userService_1;
    var ContactManagerApp;
    return {
        setters:[
            function (angular_1_1) {
                angular_1 = angular_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (mainController_1_1) {
                mainController_1 = mainController_1_1;
            },
            function (userService_1_1) {
                userService_1 = userService_1_1;
            }],
        execute: function() {
            (function (ContactManagerApp) {
                var appModule = angular_1.default
                    .module("contactManagerApp", [
                    "ngMaterial",
                    "ngMdIcons"
                ]);
                appModule.controller("mainController", mainController_1.MainController);
                appModule.service("userService", userService_1.UserService);
                appModule.config(function ($mdIconProvider, $mdThemingProvider) {
                    $mdIconProvider
                        .defaultIconSet("app/assets/svg/avatars.svg", 128)
                        .icon("menu", "app/assets/svg/menu.svg", 24);
                    $mdThemingProvider.theme("default")
                        .primaryPalette("blue")
                        .accentPalette("red");
                });
                console.log("After defining controller...");
            })(ContactManagerApp || (ContactManagerApp = {}));
        }
    }
});
//# sourceMappingURL=main.js.map