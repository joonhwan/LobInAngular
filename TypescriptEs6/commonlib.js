"use strict";
function printLine(msg) {
    var node = document.getElementById("output");
    node.innerHTML += '> ' + (msg || '') + "<br/>";
}
exports.printLine = printLine;