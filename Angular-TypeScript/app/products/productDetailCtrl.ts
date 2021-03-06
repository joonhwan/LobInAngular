module app.productDetail {
    
    interface IHaveProductId extends ng.route.IRouteParamsService {
        productId: string;
    }
    
    export class ProductDetailCtrl {
        
        title: string;
        product: app.domain.IProductModel;
        
        static $inject = ['$routeParams', 'dataAccessService'];
        constructor(private $routeParams: IHaveProductId,
                    private dataAccessService: app.common.DataAcessService) {
            var productId = $routeParams.productId;
            var resource = dataAccessService.getProductResource();
            
            this.title = "Product Detail";
            resource.get({productId: productId}, (data: app.domain.IProductModel) => {
               this.product = data; 
            });
        }
    }
    
    angular
        .module("productManagement")
        .controller("ProductDetailCtrl", ProductDetailCtrl)
    ;
}