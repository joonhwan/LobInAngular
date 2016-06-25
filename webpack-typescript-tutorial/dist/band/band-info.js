"use strict";
function default_1(app) {
    console.log("initializing band-info module...");
    app.directive('bandInfo', ['bandList', function (bandList) {
            return {
                template: '<h1 ng-repeat="band in vm.bands">{{band.name}} - {{band.formed}}</h1>',
                restrict: 'E',
                controller: function () {
                    this.bands = bandList;
                },
                controllerAs: 'vm'
            };
        }]);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=band-info.js.map