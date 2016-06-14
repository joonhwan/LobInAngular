System.register(['angular-mocks', './userService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var userService_1;
    var baseUri, UserServiceMock;
    function populateData() {
        return [
            {
                id: 1,
                userName: "jhlee",
                password: "winkler7"
            },
            {
                id: 2,
                userName: "guguboy",
                password: "guguboymirero"
            },
            {
                id: 3,
                userName: "hacho",
                password: "hachomirero"
            },
            {
                id: 4,
                userName: "limhs",
                password: "limhsmirero"
            },
            {
                id: 5,
                userName: "mirero",
                password: "mirero"
            }
        ];
    }
    return {
        setters:[
            function (_1) {},
            function (userService_1_1) {
                userService_1 = userService_1_1;
            }],
        execute: function() {
            baseUri = userService_1.userServiceUri;
            class UserServiceMock {
                constructor($httpBackend) {
                    this.$httpBackend = $httpBackend;
                    this.users = populateData();
                    $httpBackend.whenGET(userService_1.userServiceUri).respond((method, url, data, header, params) => {
                        return [
                            200,
                            this.users,
                            header,
                            "OK",
                        ];
                    });
                }
            }
            UserServiceMock.$inject = ['$httpBackend'];
            console.log("running user service mock e2e ....");
            angular
                .module("userServiceMock", ["ngMockE2E"])
                .run(UserServiceMock);
        }
    }
});
//# sourceMappingURL=userServiceMock.js.map