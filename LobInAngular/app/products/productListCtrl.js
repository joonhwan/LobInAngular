/**
 * Created by jhlee on 2016. 5. 26..
 */
(function() {
    "use strict";
    angular
        .module("productManagement")
        .controller(
            "productListCtrl",
            ["productResource", ProductListCtrl]
        );

    function ProductListCtrl(productResource) {
        var vm = this;
        
        productResource.query(function(data) {
            vm.products = data;
        })

        vm.showImage = false;

        vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
        }
    }
}());