System.register(['angular'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular_1;
    var HomeController;
    return {
        setters:[
            function (angular_1_1) {
                angular_1 = angular_1_1;
            }],
        execute: function() {
            //console.log("loading home module...");
            class HomeController {
                constructor($location, loginService) {
                    this.$location = $location;
                    this.loginService = loginService;
                    this.message = "Message from Home Controller";
                }
                logOut() {
                    console.log("logout...");
                    this.$location.path("/login");
                    this.loginService.clearCredentials();
                }
            }
            HomeController.$inject = ['$location', 'loginService'];
            angular_1.default
                .module("home", [])
                .controller('homeController', HomeController);
        }
    }
});
//# sourceMappingURL=home.js.map