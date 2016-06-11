module app.productList {
    
interface IProductListModel {
    title: string;
    showImage: boolean;
    products: app.domain.IProductModel [];
    toggleImage() : void;
}

export class ProductListCtrl implements IProductListModel {
    title: string;
    showImage: boolean;
    products: app.domain.IProductModel[];
    
    static $inject = ['dataAccessService'];

    constructor(private dataAccessService: app.common.DataAcessService) {
        console.log("creating IProductListModel...")
        this.title = "Product List";
        this.showImage = false;
        this.products = [];
        
        var productResource = this.dataAccessService.getProductResource();
        productResource.query((data: app.domain.IProductModel[]) => {
            this.products = data;
        });
    }
    
    toggleImage() : void {
        this.showImage = !this.showImage;
    }
}

angular.module("productManagement")
    .controller("ProductListCtrl", ProductListCtrl)
    ;
};