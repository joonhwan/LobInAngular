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
                'ui.bootstrap', // datetime picker 쓰려고..
                'ui.mask',
                'angularCharts',
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
                        abstract: true, // productEdit 는 이걸로 직접 route할 수 없다(info/prices/tags sub state가 활성화되면 그 때 간접 활성화?)
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
                    // stateName.substateName 표현식으로 nested state 를 구성
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
                    .state('priceAnalytics', {
                        url: '/priceAnalytics',
                        templateUrl: 'app/prices/priceAnalyticsView.html',
                        controller: 'priceAnalyticsCtrl',
                        resolve: {
                            productResource: 'productResource',
                            products: function(productResource) {
                                return productResource.query().$promise;
                            }
                        }

                    })
                ;
            }])
    ;
}());