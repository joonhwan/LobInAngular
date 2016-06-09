System.register(['jquery'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var jquery_1;
    var index;
    function printOut(msg) {
        jquery_1.default("#output").html(jquery_1.default("#output").html() + msg + '<br/>');
    }
    return {
        setters:[
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            }],
        execute: function() {
            console.log("hello world! Joonhwan");
            //$("#output").html("Hello World! This is UMD!");
            printOut('Hello World Joonhwan!');
            printOut('You are cool!');
            for (index = 0; index < 10; index++) {
                printOut('Count Down ' + index);
            }
        }
    }
});
//# sourceMappingURL=app.js.map