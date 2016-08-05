"use strict";
/// <reference path="../../app.d.ts" />
require('bootstrap/dist/css/bootstrap.min.css');
var angular = require('angular');
var MainCtrl = (function () {
    function MainCtrl() {
        this.message = "Hello Joonhwan";
        this.messages = [];
    }
    MainCtrl.prototype.handlePause = function (e) {
        console.log('called handlePause() ' + e);
        this.messages.push({ text: 'paused' });
    };
    MainCtrl.className = 'mainCtrl';
    return MainCtrl;
}());
function namedCtor(aClass) {
    var className = aClass.className;
    var ctorObj = {};
    ctorObj[className] = aClass;
    return ctorObj;
}
function namedFactory(aClass) {
    var factory = function (args) { return new aClass(args); };
    factory.$inject = aClass.$inject || [];
    var directiveName = aClass.className;
    var factoryObj = {};
    factoryObj[directiveName] = factory;
    return factoryObj;
}
var SpacebarSupport = (function () {
    function SpacebarSupport() {
        this.restrict = 'A';
    }
    SpacebarSupport.prototype.link = function (scope, element, attrs) {
        $('body').on("keypress", function (evt) {
            console.log('keypressed ' + element[0]);
            var videoElement = element[0];
            if (videoElement.paused) {
                videoElement.play();
            }
            else {
                videoElement.pause();
            }
        });
    };
    SpacebarSupport.className = "spacebarSupport";
    return SpacebarSupport;
}());
var EventPaused = (function () {
    function EventPaused($parse) {
        this.$parse = $parse;
        this.restrict = 'A';
        console.log('created event paused directive...');
    }
    // scope = {
    //   eventPaused: '&'
    // };
    EventPaused.prototype.link = function (scope, elem, attrs) {
        console.log('EventPause linked to ' + elem.nodeName);
        var fn = this.$parse(attrs[EventPaused.className]);
        elem.on('pause', function (e) {
            scope.$apply(function () {
                fn(scope, { event: e });
            });
        });
    };
    EventPaused.className = 'eventPaused';
    EventPaused.$inject = ['$parse'];
    return EventPaused;
}());
angular
    .module('app', [])
    .controller(namedCtor(MainCtrl))
    .directive(namedFactory(SpacebarSupport))
    .directive(namedFactory(EventPaused));
//# sourceMappingURL=main.js.map