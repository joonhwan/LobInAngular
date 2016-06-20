module.exports = function(app) {

  console.log('registering directive...');
  app.directive("band-info", ['bandList', function(bandList) {
    console.log("creating directive...");
    return {
      template: require('./band-info.html'),
      restrict: 'E',
      scope: {},
      transclude: true,
      controller: ['$scope', function($scope) {
        $scope.bands = bandList;
      }]
    }
  }]);

};
console.log("loaded band-info module");