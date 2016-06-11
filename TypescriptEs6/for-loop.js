print("--- for - loooooop");
var Button = (function () {
    function Button(title, onclick) {
        this.title = title;
        this.onclick = onclick;
    }
    return Button;
}());
print('순진한 버젼.');
(function () {
    var buttons = [];
    for (var i = 0; i < 3; ++i) {
        var button = new Button('Button ' + i);
        button.onclick = function () {
            print('Button' + i + ' is clicked!');
        };
        buttons.push(button);
    }
    buttons[0].onclick();
    buttons[1].onclick();
    buttons[2].onclick();
}());
print('');
print('IIFE 버젼');
(function () {
    var buttons = [];
    for (var i = 0; i < 3; ++i) {
        var button = new Button('Button ' + i);
        button.onclick = (function (captured_var) {
            return function () {
                print('Button' + captured_var + ' is clicked!');
            };
        }(i));
        buttons.push(button);
    }
    buttons[0].onclick();
    buttons[1].onclick();
    buttons[2].onclick();
}());
print('');
print('let 버젼');
(function () {
    var buttons = [];
    var _loop_1 = function(i) {
        button = new Button('Button ' + i);
        button.onclick = function () {
            print('Button' + i + ' is clicked!');
        };
        buttons.push(button);
    };
    var button;
    for (var i = 0; i < 3; ++i) {
        _loop_1(i);
    }
    buttons[0].onclick();
    buttons[1].onclick();
    buttons[2].onclick();
}());
