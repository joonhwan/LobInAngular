/**
 * Created by jhlee on 2016. 5. 26..
 */
(function() {
    "use strict";
    angular
        .module("productManagement")
        .controller("productListCtrl",  ProductListCtrl);

    function ProductListCtrl() {
        var vm = this;
        vm.products = [
            {
                "productName": "iMac",
                "productCode": "APP-MAC-011",
                "releaseDate": "2016/12/11",
                "imageUrl":"https://www.apple.com/pr/products/images/iMac27_iMac21_Photos_PRINT_131020_HERO.jpg",
                "price":1980
            },
            {
                "productName": "Surface",
                "productCode": "MSC-SFC-042",
                "releaseDate": "2016/12/11",
                "imageUrl": "http://cdn2.pcadvisor.co.uk/cmsdata/reviews/3364791/Microsoft_Surface_RT.jpg",
                "price":2150
            }
        ];

        vm.showImage = false;

        vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
        }
    }
}());