System.register(['angular'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular_1;
    var LoginController;
    return {
        setters:[
            function (angular_1_1) {
                angular_1 = angular_1_1;
            }],
        execute: function() {
            //console.log("loading login module...");
            class LoginController {
                constructor($location, loginService, userService) {
                    this.$location = $location;
                    this.loginService = loginService;
                    this.userService = userService;
                    this.dataLoading = false;
                    this.message = "Login message from LoginController";
                    console.log("creating login controller...");
                    //loginService.clearCredentials();
                    console.log('testing e2e..');
                    this.userService.getAll().then(response => {
                        for (var i = 0; i < response.length; ++i) {
                            console.log("--> user:" + response[i].userName);
                        }
                    });
                }
                login() {
                    this.dataLoading = true;
                    this.loginError = "";
                    this.loginService.login(this.userName, this.password, response => {
                        if (response.success) {
                            this.$location.path('/');
                        }
                        else {
                            this.loginError = response.failReason;
                            this.dataLoading = false;
                        }
                    });
                }
            }
            LoginController.$inject = ['$location', 'loginService', 'userService'];
            angular_1.default
                .module("login", [])
                .controller("loginController", LoginController);
        }
    }
});
//# sourceMappingURL=login.js.map