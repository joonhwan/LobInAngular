module.exports = function(app) {
  app.factory('bandList', function() {
    console.log("creating bandList...");
    return [
      { name: 'Cinderella', formed: 1983 },
      { name: 'BonJovi', formed: 1984 }
    ];
  })
}
console.log("loaded bandList module.");