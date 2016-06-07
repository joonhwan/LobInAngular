module app {
    var main =
        angular.module("productManagement", 
            ['ngRoute', 'common.services', 'productResourceMock']);
            
    main.config(routeConfig);
    
    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider:ng.route.IRouteProvider) : void {
        $routeProvider
            .when('/productList', { 
                templateUrl: '/app/products/productListView.html',
                controller: 'ProductList as vm',
            })
            .when('/product/:producdtId', {
                templateUrl: '/app/products/'
            }
            ;
    }
}