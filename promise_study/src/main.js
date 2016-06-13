(function() {

  console.log("Hello");

  // function Yaksok(fn) {
  //   var callback = null;
  //   this.then = function(cb) {
  //     callback = cb;
  //   };
  //   function resolve(value) {
  //     callback(value);
  //   };
  //
  //   setTimeout(function() {
  //     fn(resolve);
  //   }, 1);
  // }

  function Yaksok(doAndCallResolve) {
    var callback = null;
    var state = 'pending';
    var value = 0;

    this.then = function(cb) {
      callback = cb;
      if(state == 'pending' ) {
        // nothing
      } else {
        callback(value);
      }
    }

    function resolve(_value) {
      state = 'resolved';
      value = _value;
      if(callback) {
        callback(value);
      }
    }

    doAndCallResolve(resolve);
  }

  function generateNumber() {
    return new Yaksok(function(resolve){
      var value =42;
      resolve(value);
      console.log('generated number' + value);
    });
  }

  generateNumber().then(function(value) {
    console.log('yaksok completed : ' + value);
  });

  var yaksok = generateNumber();

  yaksok.then(function(value) {
    console.log('yaksok completed : ' + value);
  });
  yaksok.then(function(value) {
    console.log('again yaksok completed : ' + value);
  });

  //doYaksok();


}());
