import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  // transform(value: any, ...args: any[]): any;
  transform(products:IProduct[], ...args:string[]): IProduct[] {
    let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
    if(filter) {
      products = products.filter((product:IProduct) =>  {
        return product.name.toLocaleLowerCase().indexOf(filter) >= 0
      });
    }
    return products;
  }
}
