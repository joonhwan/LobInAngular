import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {IProduct} from './product';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService {

  private _productUrl = "http://localhost:3000/products";

  constructor(private _http:Http) {
    var me = this as any;
    console.log(`created ProductService(id={me.id})`)
    
  }
  
  getProducts(): Observable<IProduct[]> {
    return this._http.get(this._productUrl)
      .map((response:Response) => response.json() as IProduct[])
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError)
      ;
  }

  private handleError(error:Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}