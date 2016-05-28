/**
 * Created by jhlee on 2016. 5. 26..
 */

(function() {
    "use strict";
    angular
        .module('productManagement',
            [
                'common.services',
                'ui.router',
                'productResourceMock'
            ])
        .config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/');

                $stateProvider
                    .state('home', {
                        url: '/',
                        templateUrl: 'app/welcomeView.html'
                    })
                    .state('productList', {
                        url: '/products',
                        templateUrl: 'app/products/productListView.html',
                        controller: 'productListCtrl as vm'
                    })
                    // .state('productEdit', {
                    //     url: '/products/edit/:productId',
                    //     templateUrl: 'app/products/productEditView.html',
                    //     controller: 'productEditCtrl as vm',
                    //
                    // })
                    .state('productDetail', {
                        url: '/products/:productId',
                        templateUrl: 'app/products/productDetailView.html',
                        controller: 'productDetailCtrl as vm'
                        // resolve: {
                        //     productService: "productService",
                        //     product: function(productService, $stateParams) {
                        //         var productId = $stateParams.productId;
                        //         return productService.get({productId:productId}).$promise;
                        //     }
                        // }
                    })
                ;
            }])
    ;
}());