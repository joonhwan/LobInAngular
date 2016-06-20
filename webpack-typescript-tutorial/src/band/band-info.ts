export default function(app:angular.IModule) {
  console.log("initializing band-info module...");
  app.directive('bandInfo', ['bandList', function(bandList) {
    return {
      template: '<h1 ng-repeat="band in vm.bands">{{band.name}} - {{band.formed}}</h1>',
      restrict: 'E',
      controller: function() {
        this.bands = bandList;
      },
      controllerAs: 'vm'
    }
  }])
}