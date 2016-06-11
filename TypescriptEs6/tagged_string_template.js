"use strict";

var _templateObject = _taggedTemplateLiteral(['Hello, ', ''], ['Hello, ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var commonlib_1 = require('./commonlib');
var friend = function friend(strings) {
    for (var _len = arguments.length, substitutions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        substitutions[_key - 1] = arguments[_key];
    }

    var result = [];
    substitutions.forEach(function (sub, index) {
        result.push(strings[index], sub);
    });
    result.push(strings[strings.length - 1]);
    return result.join('');
};
var name = "Joonhwan";
commonlib_1.printLine(friend(_templateObject, name));
var family = ['Joonhwan', 'Sinyoung', 'Seoyeon', 'Eunseo'];
for (var member in family) {
    commonlib_1.printLine('Family:' + member);
}
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = family[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var member = _step.value;

        commonlib_1.printLine('Family:' + member);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var instrument = "œå";
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = instrument[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var c = _step2.value;

        commonlib_1.printLine(c);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
            _iterator2['return']();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

commonlib_1.printLine('END');