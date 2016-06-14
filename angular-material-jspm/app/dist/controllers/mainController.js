System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MainController;
    return {
        setters:[],
        execute: function() {
            MainController = (function () {
                function MainController(userService, $mdSidenav, $mdToast, $mdDialog) {
                    var _this = this;
                    this.userService = userService;
                    this.$mdSidenav = $mdSidenav;
                    this.$mdToast = $mdToast;
                    this.$mdDialog = $mdDialog;
                    this.selectedUser = null;
                    this.searchText = '';
                    this.tabIndex = 0;
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
                    this.tabIndex = 0;
                };
                MainController.prototype.removeNote = function (note) {
                    var noteIndex = this.selectedUser.notes.indexOf(note);
                    if (noteIndex >= 0) {
                        this.selectedUser.notes.splice(noteIndex, 0);
                        var toastMessage = "Note[" + note.title + "] has been removed.";
                        //this.$mdToast.showSimple(toastMessage);
                        this.openToast(toastMessage);
                    }
                };
                MainController.prototype.removeAllNotes = function ($event) {
                    var _this = this;
                    this.showConfirm("Are you sure you want to delete all notes?", "Anoo notes will be deleted.", $event)
                        .then(function () {
                        _this.selectedUser.notes = [];
                        _this.openToast("Deleted all notes.");
                    });
                    // var confirm = this.$mdDialog.confirm()
                    //   .title("Are sure you want to delete all notes?")
                    //   .textContent("All notes will be deleted. You won't undo this action.")
                    //   .ariaLabel('Lucky day')
                    //   .targetEvent($event)
                    //   .ok("Yes")
                    //   .cancel("No")
                    //   ;
                    //   var self = thi s;
                    //   this.$mdDialog.show(confirm).then(() => {
                    //     self.selectedUser.notes = [];
                    //     self.openToast("Deleted all notes.")
                    //     ;
                    //   })  
                };
                MainController.prototype.showConfirm = function (title, text, ev) {
                    // Appending dialog to document.body to cover sidenav in docs app
                    var confirm = this.$mdDialog.confirm()
                        .title(title)
                        .textContent(text)
                        .ariaLabel("question dialog")
                        .targetEvent(ev)
                        .ok('Yes')
                        .cancel('No');
                    return this.$mdDialog.show(confirm);
                };
                MainController.prototype.openToast = function (toastMessage) {
                    this.$mdToast.show(this.$mdToast.simple()
                        .textContent(toastMessage)
                        .position("top right")
                        .hideDelay(3000));
                };
                MainController.$inject = ["userService", "$mdSidenav", "$mdToast", "$mdDialog"];
                return MainController;
            }());
            exports_1("MainController", MainController);
            console.log("Main Controller Evaluated..");
        }
    }
});
//# sourceMappingURL=mainController.js.map