System.register(['angular'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular_1;
    var RegisterController;
    return {
        setters:[
            function (angular_1_1) {
                angular_1 = angular_1_1;
            }],
        execute: function() {
            class RegisterController {
                constructor($location, $rootScope, userService) {
                    this.$location = $location;
                    this.$rootScope = $rootScope;
                    this.userService = userService;
                }
                register() {
                    this.registering = true;
                    this.userService.create(this.user)
                        .then(_ => {
                        this.registering = false;
                        this.$location.path('/login');
                    })
                        .catch((reason) => {
                        this.registering = false;
                        this.lastError = reason;
                    });
                }
            }
            RegisterController.$inject = ['$location', '$rootScope', 'userService'];
            angular_1.default
                .module('register', [])
                .controller('registerController', RegisterController);
        }
    }
});
//# sourceMappingURL=register.js.map