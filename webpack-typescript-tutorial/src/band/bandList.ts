export default function(app:angular.IModule) {
  app.factory('bandList', function() {
    return [
      { name:'Oats', formed:1997 },
      { name:'015B', formed:1992 }
    ];
  })
}