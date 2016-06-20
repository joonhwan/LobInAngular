angular
  .module("app", [])
  .factory("bandList", function() {
    return [
      { name: 'Cinderella', formed: 1983 },
      { name: 'BonJovi', formed: 1984 }
    ];
  })
  .controller("myController", ['bandList', function(bandList) {
    this.message = "Hello World";
    this.bandList = bandList;
  }])
  // .directive("band-info", function() {
  //   return {
  //     restrict: 'E',
  //     scope: {}
  //     controller: function() {
  //       this.bands = bandList;
  //     },
  //     controllerAs: 'vm',
  //     template: '<h1 ng-repeat="band in vm.bands">{{band.name}} = {{band.formed}}</h1>',
  //     bindToController: true
  //   }
  // })
  .directive("testDirective", function() {
    return {
        restrict : "E",
        template : "<h1>Hey, I'm the directive's content!</h1>"
    };
  });

 ;