System.register(['angular-material'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ContactSheetController;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            ContactSheetController = (function () {
                function ContactSheetController($mdBottomSheet, userService) {
                    this.$mdBottomSheet = $mdBottomSheet;
                    this.userService = userService;
                    this.actions = [
                        { name: 'Phone', icon: 'phone' },
                        { name: 'Twitter', icon: 'twitter' },
                        { name: 'Google+', icon: 'google_plus' },
                        { name: 'Hangout', icon: 'hangouts' }
                    ];
                    this.user = userService.selectedUser;
                }
                ContactSheetController.prototype.activateContact = function (action) {
                    this.$mdBottomSheet.hide(action);
                };
                ContactSheetController.$inject = ['$mdBottomSheet', 'userService'];
                return ContactSheetController;
            }());
            exports_1("ContactSheetController", ContactSheetController);
        }
    }
});
//# sourceMappingURL=contactSheetController.js.map