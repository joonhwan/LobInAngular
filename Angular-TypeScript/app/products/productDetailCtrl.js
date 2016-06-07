var app;
(function (app) {
    var productDetail;
    (function (productDetail) {
        var ProductDetailCtrl = (function () {
            function ProductDetailCtrl($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                var productId = $routeParams.productId;
                var resource = dataAccessService.getProductResource();
                this.title = "Product Detail";
                resource.get({ productId: productId }, function (data) {
                    _this.product = data;
                });
            }
            ProductDetailCtrl.$inject = ['$routeParams', 'dataAccessService'];
            return ProductDetailCtrl;
        }());
        angular
            .module("productManagement")
            .controller("ProductDetailCtrl", ProductDetailCtrl);
    })(productDetail = app.productDetail || (app.productDetail = {}));
})(app || (app = {}));
