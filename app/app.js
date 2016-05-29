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
                'ui.bootstrap',
                'ui.mask',
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
                    .state('productEdit', {
                        abstract: true, // productEdit 는 이걸로 직접 route할 수 없다(info/price/tags sub state가 활성화되면 그 때 간접 활성화?)
                        url: '/products/edit/:productId',
                        templateUrl: 'app/products/productEditView.html',
                        controller: 'productEditCtrl as vm',
                        resolve: {
                            productResource: "productResource",
                            product: function(productResource, $stateParams) {
                                var productId = $stateParams.productId;
                                return productResource.get({productId:productId}).$promise;
                            }
                        }
                    })
                    .state('productEdit.info', {
                        url: '/info',
                        templateUrl: 'app/products/productEditInfoView.html'
                    })
                    .state('productEdit.price', {
                        url: '/info',
                        templateUrl: 'app/products/productEditPriceView.html'
                    })
                    .state('productEdit.tags', {
                        url: '/info',
                        templateUrl: 'app/products/productEditTagsView.html'
                    })
                    .state('productDetail', {
                        url: '/products/:productId',
                        templateUrl: 'app/products/productDetailView.html',
                        controller: 'productDetailCtrl as vm',
                        resolve: {
                            productResource: "productResource",
                            product: function(productResource, $stateParams) {
                                var productId = $stateParams.productId;
                                return productResource.get({productId:productId}).$promise;
                            }
                        }
                    })
                ;
            }])
    ;
}());