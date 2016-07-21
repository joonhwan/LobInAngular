import {Injectable} from '@angular/core';
import {IProduct} from './product';

@Injectable()
export class ProductService {

  constructor() {
    var me = this as any;
    console.log(`created ProductService(id={me.id})`)
  }
  getProducts(): IProduct[] {
    return [
      {
        "id": 2,
        "name": "Garden Cart",
        "code": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "rating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
      },
      {
        "id": 5,
        "name": "Hammer",
        "code": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9, 
        "rating": 4.8,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
      },
      {
        "id": 10,
        "name": "Video Game Controller",
        "code": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "rating": 4.6,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
      }
    ];
  }
}