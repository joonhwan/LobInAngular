module app.common {
    interface IDataAcessService {
        getProductResource() : ng.resource.IResourceClass<IProductResource>;
    }
    interface IProductResource
        extends ng.resource.IResource<app.domain.Product> {
    }

    export class DataAcessService
        implements IDataAcessService {
            
        static $inject = ['$resource'];
        
        constructor(
            private $resource:ng.resource.IResourceService
            ) {
        }
        
        getProductResource() : ng.resource.IResourceClass<IProductResource> {
            return this.$resource("/api/products/:productId");
        }
    }
    
    angular
        .module('common.services')
        .service('dataAccessService', DataAcessService);
}