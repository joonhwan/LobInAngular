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
                    //this.testE2e();
                }
                login() {
                    this.dataLoading = true;
                    this.loginError = "";
                    this.loginService.login(this.userName, this.password, response => {
                        if (response.success) {
                            this.loginError = "";
                            this.$location.path('/');
                        }
                        else {
                            this.loginError = response.failReason;
                            this.dataLoading = false;
                        }
                    });
                }
                testE2e() {
                    console.log('testing e2e!!!');
                    this.userService.getAll().then(response => {
                        for (var i = 0; i < response.length; ++i) {
                            console.log("--> user:" + JSON.stringify(response[i]));
                        }
                    });
                    this.userService.getById(4).then(response => {
                        console.log("--> id=4 user:" + JSON.stringify(response));
                    });
                    this.userService.getById(88).then(response => {
                        console.log("response:" + JSON.stringify(response) + "--> id=88 user:" + JSON.stringify(response));
                    }).catch(reason => {
                        console.log("response:" + JSON.stringify(reason) + "--> id=88 user not found");
                    });
                    this.userService.getByUserName("jhlee")
                        .then(response => {
                        console.log("get by name response : " + JSON.stringify(response));
                    })
                        .catch(reason => {
                        console.log("get by name failed : reason=" + JSON.stringify(reason));
                    });
                    this.userService.create({
                        id: 0,
                        userName: "seoyoen",
                        password: "okmsy"
                    })
                        .then(response => {
                        console.log("create response : " + JSON.stringify(response));
                    })
                        .catch(reason => {
                        console.log("create failed : " + JSON.stringify(reason));
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