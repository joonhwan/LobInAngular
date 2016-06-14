System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LoginGlobalData;
    return {
        setters:[],
        execute: function() {
            class LoginGlobalData {
                constructor(currentUser) {
                    this.currentUser = currentUser;
                }
            }
            exports_1("LoginGlobalData", LoginGlobalData);
        }
    }
});
//# sourceMappingURL=loginRootScopeService.js.map