System.register(['angular-mocks', 'lodash', './userService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var _, userService_1;
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
            function (_2) {
                _ = _2;
            },
            function (userService_1_1) {
                userService_1 = userService_1_1;
            }],
        execute: function() {
            baseUri = userService_1.userServiceUri;
            class UserServiceMock {
                constructor($httpBackend, $timeout) {
                    this.$httpBackend = $httpBackend;
                    this.$timeout = $timeout;
                    console.log("configuring user service mock e2e ....");
                    this.users = populateData();
                    $httpBackend.whenGET(userService_1.userServiceUri).respond((method, url, data, header, params) => {
                        return [
                            200,
                            this.users,
                            header,
                            "OK",
                        ];
                    });
                    const uriWithId = new RegExp(userService_1.userServiceUri + "/[0-9]+");
                    $httpBackend.whenGET(uriWithId).respond((metehod, url, data, header, params) => {
                        var id = parseInt(url.split("/").slice(-1)[0]);
                        var found = _.find(this.users, user => user.id === id);
                        if (found) {
                            return [
                                200,
                                found,
                                header,
                                "OK",
                            ];
                        }
                        else {
                            return [
                                404,
                                null,
                                header,
                                "NOT FOUND"
                            ];
                        }
                    });
                    // var timeoutService = $timeout;
                    // console.log('timeout =' + timeoutService);
                    const uriWithName = new RegExp(userService_1.userServiceUri + "/[a-zA-Z].*");
                    $httpBackend.whenGET(uriWithName).respond((method, url, data, header, params) => {
                        var name = url.split("/").slice(-1)[0];
                        var found = _.find(this.users, user => {
                            return user.userName === name;
                        });
                        if (found) {
                            return [200, found, header, "OK"];
                        }
                        else {
                            return [404, null, header, "NOTFOUND!"];
                        }
                    });
                    $httpBackend.whenPOST(userService_1.userServiceUri).respond((method, url, data, header) => {
                        let newUser = JSON.parse(data);
                        let existingUserWithSameName = _.find(this.users, user => user.userName === newUser.userName);
                        if (existingUserWithSameName) {
                            return [409, null, header, "Conflicted id"];
                        }
                        else {
                            var maxId = (_.maxBy(this.users, user => user.id)).id;
                            newUser.id = maxId + 1;
                            this.users.push(newUser);
                            return [200, newUser, header, "OK"];
                        }
                    });
                    $httpBackend.whenGET(/app/).passThrough();
                    console.log("configured user service mock e2e ....");
                }
            }
            UserServiceMock.$inject = ['$httpBackend', '$timeout'];
            console.log("registering userServiceMock...");
            angular
                .module("userServiceMock", ["ngMockE2E"])
                .run(UserServiceMock);
            console.log("registered userServiceMock.");
        }
    }
});
//# sourceMappingURL=userServiceMock.js.map