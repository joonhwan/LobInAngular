System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MainController;
    return {
        setters:[],
        execute: function() {
            MainController = (function () {
                function MainController(userService) {
                    var _this = this;
                    this.userService = userService;
                    this.message = "Hello I'm Main Controller";
                    this.userService.loadAllUsers()
                        .then(function (users) {
                        _this.users = users;
                        console.log(_this.users);
                    });
                }
                MainController.$inject = ["userService"];
                return MainController;
            }());
            exports_1("MainController", MainController);
            console.log("Main Controller Evaluated..");
        }
    }
});
//# sourceMappingURL=mainController.js.map