System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserService;
    return {
        setters:[],
        execute: function() {
            UserService = (function () {
                function UserService($q) {
                    this.$q = $q;
                    this.selectedUser = null;
                    this.users = [
                        {
                            name: "Joonhwan",
                            avatar: "svg-1",
                            bio: "Joonwhan ! Contrary to popular belief, Lorem Ipsum is not simply random text.\n      It has roots in a piece of classical Latin literature from 45 BC, making\n      it over 2000 years old. Richard McClintock, a Latin professor at Hampden-\n      Sydney College in Virginia, looked up one of the more obscure Latin words\n      , consectetur, from a Lorem Ipsum passage, and going through the cites of\n       the word in classical literature, discovered the undoubtable source.",
                            notes: [
                                { title: "Pay back dinner", date: new Date("2016-01-22") },
                                { title: "Buy flower to my wife", date: new Date("2016-09-08") }
                            ]
                        },
                        {
                            name: "Sinyoung",
                            avatar: "svg-2",
                            bio: "Sinyoung !Contrary to popular belief, Lorem Ipsum is not simply random text.\n      It has roots in a piece of classical Latin literature from 45 BC, making\n      it over 2000 years old. Richard McClintock, a Latin professor at Hampden-\n      Sydney College in Virginia, looked up one of the more obscure Latin words\n      , consectetur, from a Lorem Ipsum passage, and going through the cites of\n       the word in classical literature, discovered the undoubtable source.",
                            notes: [
                                { title: "Pay back dinner", date: new Date("2016-01-22") },
                                { title: "Buy flower to my wife", date: new Date("2016-09-08") }
                            ]
                        },
                        {
                            name: "Seoyeon",
                            avatar: "svg-3",
                            bio: "Seoyeon ! Contrary to popular belief, Lorem Ipsum is not simply random text.\n      It has roots in a piece of classical Latin literature from 45 BC, making\n      it over 2000 years old. Richard McClintock, a Latin professor at Hampden-\n      Sydney College in Virginia, looked up one of the more obscure Latin words\n      , consectetur, from a Lorem Ipsum passage, and going through the cites of\n       the word in classical literature, discovered the undoubtable source.",
                            notes: [
                                { title: "Pay back dinner", date: new Date("2016-01-22") },
                            ]
                        },
                        {
                            name: "Eunseo",
                            avatar: "svg-4",
                            bio: "Eunseo! Contrary to popular belief, Lorem Ipsum is not simply random text.\n      It has roots in a piece of classical Latin literature from 45 BC, making\n      it over 2000 years old. Richard McClintock, a Latin professor at Hampden-\n      Sydney College in Virginia, looked up one of the more obscure Latin words\n      , consectetur, from a Lorem Ipsum passage, and going through the cites of\n       the word in classical literature, discovered the undoubtable source.",
                            notes: []
                        }
                    ];
                }
                UserService.prototype.loadAllUsers = function () {
                    return this.$q.when(this.users);
                };
                UserService.prototype.addUser = function (user) {
                    this.users.push(user);
                    return this.$q.when(user);
                };
                UserService.$inject = ["$q"];
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=userService.js.map