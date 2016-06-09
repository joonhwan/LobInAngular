/// <reference path="../typings/tsd.d.ts" />
import $ from 'jquery';

function printOut(msg) {
    $("#output").html($("#output").html() + msg + '<br/>');
}

console.log("hello world! Joonhwan");
//$("#output").html("Hello World! This is UMD!");
printOut('Hello World Joonhwan!');
printOut('You are cool!');

for (var index = 0; index < 10; index++) {
    printOut('Count Down ' + index);
}