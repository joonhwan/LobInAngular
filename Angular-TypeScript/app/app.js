var app;
(function (app) {
    var main = angular.module("productManagement", ['ngRoute', 'common.services', 'productResourceMock']);
    main.config(routeConfig);
    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider) {
        $routeProvider
            .when('/productList', {
            templateUrl: '/app/products/productListView.html',
            controller: app.productList.ProductListCtrl,
            controllerAs: 'vm'
        })
            .when('/productDetail/:productId', {
            templateUrl: '/app/products/productDetailView.html',
            controller: 'ProductDetailCtrl as vm'
        })
            .otherwise('/productList');
    }
    console.log('end of app module definition');
})(app || (app = {}));
