/**
 * Created by jhlee on 2016. 5. 29..
 */
(function() {

    "use strict";

    var app = angular
        .module('productManagement')
        .controller('productDetailCtrl', ['product', 'productService', ProductDetailCtrl])
    ;

    function ProductDetailCtrl(product, productService) {
        var vm = this;

        // var product = {
        //     "productId": 1,
        //     "productName": "iMac24",
        //     "productCode": "APP-MAC-011",
        //     "releaseDate": "2016/12/11",
        //     "imageUrl":"https://www.apple.com/pr/products/images/iMac27_iMac21_Photos_PRINT_131020_HERO.jpg",
        //     "prices":1980,
        //     "category": "computer",
        //     "tags": ["apple", "mac", "osx"],
        //     "description": "beautiful computer ever exist"
        // };

        vm.product = product;
        
        vm.marginPercent = productService.calculateMarginPercent(vm.product.price, vm.product.cost);
        
        vm.title = "Product Detail : " + vm.product.productName;

        if(vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }
    };
}());