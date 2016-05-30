/**
 * Created by jhlee on 2016. 5. 31..
 */
(function() {

    "use strict";

    angular
        .module('productManagement')
        .controller('priceAnalyticsCtrl', ['$scope', '$filter', 'productService', 'products', priceAnalyticsCtrl])
    ;

    function priceAnalyticsCtrl($scope, $filter, productService, products) {
        $scope.title = 'Price Analytics';

        console.log('products total :' + products.length);

        for(var i=0; i<products.length; ++i) {
            var product = products[i];

            product.marginPercent = productService.calculateMarginPercent(product.price, product.cost);
            product.marginAmount = productService.calculateMarginAmount(product.price, product.cost);
            console.log('   --> ' + product.marginAmount + ', ' + product.marginPercent)

        }

        var orderedProductAmount  = $filter('orderBy')(products, 'marginAmount');
        var filteredProductAmount= $filter('limitTo')(orderedProductAmount, 5);

        var chartDataAmount = [];
        for(var i=0; i<filteredProductAmount.length; ++i) {
            var product = filteredProductAmount;
            chartDataAmount.push({
                x: product.productName,
                y: [product.cost, product.price, product.marginAmount]
            });
        }
        $scope.dataAmount = {
            series: ['Cost', 'Price', 'Amount'],
            data: chartDataAmount
        };
        $scope.configAmount = {
            title: 'Top $ Margin Product',
            tooltips: true,
            labels: false,
            mouseover: function() {},
            mouseout: function() {},
            click: function() {},
            legend: {
                display: true,
                //could be 'left, right'
                position: 'right'
            }
        }

        var orderedProductPercent  = $filter('orderBy')(products, 'marginPercent');
        var filteredProductPercent = $filter('limitTo')(orderedProductPercent, 5);

        var chartDataPercent = [];
        for(var i=0; i<filteredProductPercent.length; ++i) {
            var product = filteredProductPercent;
            chartDataPercent.push({
                x: product.productName,
                y: product.marginPercent,
            })
        }
        $scope.dataPercent = {
            series : ['Percent'],
            data : chartDataPercent
        };
        $scope.configPercent = {
            title: 'Top $ Margin Product',
            tooltips: true,
            labels: false,
            mouseover: function() {},
            mouseout: function() {},
            click: function() {},
            legend: {
                display: true,
                //could be 'left, right'
                position: 'right'
            }
        }


    }

}());