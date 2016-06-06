var app;
(function (app) {
    var common;
    (function (common) {
        var DataAcessService = (function () {
            function DataAcessService($resource) {
                this.$resource = $resource;
            }
            DataAcessService.prototype.getProductResource = function () {
                return this.$resource("/api/products/:productId");
            };
            DataAcessService.$inject = ['$resource'];
            return DataAcessService;
        }());
        common.DataAcessService = DataAcessService;
        angular
            .module('common.services')
            .service('dataAccessService', DataAcessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
