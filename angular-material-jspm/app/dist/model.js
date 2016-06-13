System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User, Note;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(name, avatar, bio, notes) {
                    this.name = name;
                    this.avatar = avatar;
                    this.bio = bio;
                    this.notes = notes;
                }
                return User;
            }());
            exports_1("User", User);
            Note = (function () {
                function Note(title, date) {
                    this.title = title;
                    this.date = date;
                }
                return Note;
            }());
            exports_1("Note", Note);
        }
    }
});
//# sourceMappingURL=model.js.map