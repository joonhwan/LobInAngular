/// <reference path="../../typings/tsd.d.ts"/>
System.register(["angular", "angular-material", "angular-material-icons", "angular-material/angular-material.css!", "angular-material-icons/angular-material-icons.css!", "../assets/app.css!", "./controllers/mainController", "./controllers/addUserDialogController", "./controllers/contactSheetController", "./services/userService"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular_1, mainController_1, addUserDialogController_1, contactSheetController_1, userService_1;
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
            function (addUserDialogController_1_1) {
                addUserDialogController_1 = addUserDialogController_1_1;
            },
            function (contactSheetController_1_1) {
                contactSheetController_1 = contactSheetController_1_1;
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
                appModule.controller("addUserDialogController", addUserDialogController_1.AddUserDialogController);
                appModule.controller("contactSheetController", contactSheetController_1.ContactSheetController);
                appModule.service("userService", userService_1.UserService);
                appModule.config(function ($mdIconProvider, $mdThemingProvider) {
                    $mdIconProvider
                        .defaultIconSet("app/assets/svg/avatars.svg", 128)
                        .icon("google_plus", "app/assets/svg/google_plus.svg", 512)
                        .icon("hangouts", "app/assets/svg/hangouts.svg", 512)
                        .icon("twitter", "app/assets/svg/twitter.svg", 512)
                        .icon("phone", "app/assets/svg/phone.svg", 512)
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