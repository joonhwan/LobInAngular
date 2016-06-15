System.register(['./serviceModule'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var serviceModule_1;
    var LocalAuthStoreService;
    return {
        setters:[
            function (serviceModule_1_1) {
                serviceModule_1 = serviceModule_1_1;
            }],
        execute: function() {
            class LocalAuthStoreService {
                constructor($cookieStore) {
                    this.$cookieStore = $cookieStore;
                    this.user = $cookieStore.get('globals') || null;
                }
                get() {
                    return this.user;
                }
                set(user) {
                    this.$cookieStore.put('globals', user);
                    this.user = user;
                }
            }
            LocalAuthStoreService.$inject = ['$cookieStore'];
            console.log("registering localAuthStoreService...");
            serviceModule_1.getServiceModule().service('localAuthStoreService', LocalAuthStoreService);
        }
    }
});
//# sourceMappingURL=localAuthStoreService.js.map