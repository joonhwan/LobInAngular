System.register(['angular', './loginService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular_1;
    var serviceModule;
    function getServiceModule() {
        if (!serviceModule) {
            serviceModule = angular_1.default.module('serviceModule', []);
        }
        return serviceModule;
    }
    exports_1("getServiceModule", getServiceModule);
    return {
        setters:[
            function (angular_1_1) {
                angular_1 = angular_1_1;
            },
            function (_1) {}],
        execute: function() {
            console.log("creating service modules...");
            serviceModule = null;
        }
    }
});
//# sourceMappingURL=serviceModule.js.map