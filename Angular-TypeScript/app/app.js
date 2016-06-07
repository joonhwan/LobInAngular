var app;
(function (app) {
    var main = angular.module("productManagement", ['ngRoute', 'common.services', 'productResourceMock']);
    main.config(routeConfig);
    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider) {
        console.log('1');
        $routeProvider
            .when('/productList', {
            templateUrl: '/app/products/productListView.html',
            controller: 'ProductListCtrl as vm',
        });
        console.log('2');
        $routeProvider.when('/productDetail/:productId', {
            templateUrl: '/app/products/productDetailView.html',
            controller: 'ProductDetailCtrl as vm'
        });
        console.log('3');
        $routeProvider.otherwise('/productList');
    }
    console.log('end of app module definition');
})(app || (app = {}));
