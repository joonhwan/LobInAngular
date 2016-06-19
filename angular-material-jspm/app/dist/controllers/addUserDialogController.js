System.register(['angular-material', '../model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var model_1;
    var CreateUser, AddUserDialogController;
    return {
        setters:[
            function (_1) {},
            function (model_1_1) {
                model_1 = model_1_1;
            }],
        execute: function() {
            CreateUser = (function () {
                function CreateUser(firstName, lastName, avatar, bio) {
                    if (firstName === void 0) { firstName = ""; }
                    if (lastName === void 0) { lastName = ""; }
                    if (avatar === void 0) { avatar = ""; }
                    if (bio === void 0) { bio = ""; }
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.avatar = avatar;
                    this.bio = bio;
                }
                CreateUser.prototype.toModel = function () {
                    return new model_1.User(this.firstName + this.lastName, this.avatar, this.bio, []);
                };
                return CreateUser;
            }());
            exports_1("CreateUser", CreateUser);
            AddUserDialogController = (function () {
                function AddUserDialogController($mdDialog, userService) {
                    this.$mdDialog = $mdDialog;
                    this.userService = userService;
                    this.avatars = [
                        'svg-1', 'svg-2', 'svg-3', 'svg-4'
                    ];
                    this.user = new CreateUser();
                }
                AddUserDialogController.prototype.cancel = function () {
                    this.$mdDialog.cancel();
                };
                AddUserDialogController.prototype.save = function () {
                    var _this = this;
                    this.$mdDialog.hide();
                    this.userService.addUser(this.user.toModel())
                        .then(function (user) { return _this.$mdDialog.hide(user); })
                        .catch(function (reason) {
                        //TODO toast.
                    });
                };
                AddUserDialogController.$inject = ['$mdDialog', 'userService'];
                return AddUserDialogController;
            }());
            exports_1("AddUserDialogController", AddUserDialogController);
        }
    }
});
//# sourceMappingURL=addUserDialogController.js.map