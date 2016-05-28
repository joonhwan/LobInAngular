/**
 * Created by jhlee on 2016. 5. 28..
 */
(function() {
   "use strict";

    angular
        .module("common.services")
        .factory("productResource", ["$resource", productResource])
    ;

    function productResource($resource) {
        return $resource("/api/products/:productId");
    }

}())