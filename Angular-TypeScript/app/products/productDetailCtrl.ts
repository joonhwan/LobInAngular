module app.productDetail {
    
    interface IHaveProductId extends ng.route.IRouteParamsService {
        productId: string;
    }
    
    class ProductDetailCtrl {
        
        title: string;
        product: app.domain.IProduct;
        
        static $inject = ['$routeParams', 'dataAccessService'];
        constructor(private $routeParams: IHaveProductId,
                    private dataAccessService: app.common.DataAcessService) {
            var productId = $routeParams.productId;
            var resource = dataAccessService.getProductResource();
            
            this.title = "Product Detail";
            resource.get({productId: productId}, (data: app.domain.IProduct) => {
               this.product = data; 
            });
        }
    }
    
    angular
        .module("productManagement")
        .controller("ProductDetailCtrl", ProductDetailCtrl)
    ;
}