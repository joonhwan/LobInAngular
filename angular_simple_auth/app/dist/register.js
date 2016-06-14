System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RegisterController;
    return {
        setters:[],
        execute: function() {
            class RegisterController {
                constructor($location, $rootScope, userService) {
                    this.$location = $location;
                    this.$rootScope = $rootScope;
                    this.userService = userService;
                }
                register() {
                    this.registering = true;
                    this.userService.create(this.user);
                }
            }
            RegisterController.$inject = ['$location', '$rootScope', 'userService'];
        }
    }
});
//# sourceMappingURL=register.js.map