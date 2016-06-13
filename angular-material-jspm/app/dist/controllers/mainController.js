System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MainController;
    return {
        setters:[],
        execute: function() {
            MainController = (function () {
                function MainController(userService, $mdSidenav) {
                    var _this = this;
                    this.userService = userService;
                    this.$mdSidenav = $mdSidenav;
                    this.selectedUser = null;
                    this.searchText = '';
                    this.userService.loadAllUsers()
                        .then(function (users) {
                        _this.users = users;
                        _this.selectedUser = users[0];
                        ///console.log(this.users);
                    });
                }
                MainController.prototype.toggleSidenav = function () {
                    this.$mdSidenav("left").toggle();
                };
                MainController.prototype.selectUser = function (user) {
                    this.selectedUser = user;
                    var sidenav = this.$mdSidenav("left");
                    if (sidenav.isOpen()) {
                        sidenav.close();
                    }
                };
                MainController.$inject = ["userService", "$mdSidenav"];
                return MainController;
            }());
            exports_1("MainController", MainController);
            console.log("Main Controller Evaluated..");
        }
    }
});
//# sourceMappingURL=mainController.js.map