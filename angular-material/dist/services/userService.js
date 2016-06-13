"use strict";
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var UserService = (function () {
    function UserService($q) {
        this.$q = $q;
    }
    UserService.prototype.loadAllUsers = function () {
        return this.$q.when(this.users);
    };
    UserService.$inject = ['$q'];
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map