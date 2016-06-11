print("--- for - loooooop");

class Button {
  constructor(
    public title: string,
    public onclick?: () => void
  )
  {
  }
}

print('순진한 버젼.');
(function() {
  var buttons: Button[] = [];
  for(var i=0; i<3; ++i) {
    var button = new Button('Button ' + i);
    button.onclick = () => {
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

(function() {
  var buttons: Button[] = [];
  for(var i=0; i<3; ++i) {
    var button = new Button('Button ' + i);
    button.onclick = (function(captured_var){
      return () => {
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

(function() {
  var buttons: Button[] = [];
  for(let i=0; i<3; ++i) {
    var button = new Button('Button ' + i);
    button.onclick = () => {
        print('Button' + i + ' is clicked!');
      };
    buttons.push(button);
  }
  buttons[0].onclick();
  buttons[1].onclick();
  buttons[2].onclick();
}());
