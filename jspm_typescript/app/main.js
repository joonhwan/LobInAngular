"use strict";
const $ = require('jquery');
var consoleTag = $('#console');
consoleTag.html("Hello World<br/>");
consoleTag.html(consoleTag.html() + "Hello World<br/>");

console.log('hello world');
