'use strict';

function multiGreet() {
    for (var _len = arguments.length, persons = Array(_len), _key = 0; _key < _len; _key++) {
        persons[_key] = arguments[_key];
    }

    persons.forEach(function (person) {
        print('Hello ' + person);
    });
}
var myFamily = ['신영', '준환', '서연', '은서'];
print("my family...");
multiGreet.apply(undefined, myFamily);
print();
print('empty' + 1);
multiGreet();
print();
var instrument = "asdf";
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = instrument[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var c = _step.value;

        print(c);
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

print('END');