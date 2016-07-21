import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductFilterPipe} from './product-filter.pipe';
import {StarComponent} from '../shared/star.component';

var css = require('./product-list.component.css');
@Component({
  selector: 'apm-product-list',
  template: require('./product-list.component.html'),
  styles: [css],
  pipes: [ProductFilterPipe],
  directives: [StarComponent]
})
export class ProductListComponent implements OnInit {
  products: IProduct[];
  showImage:boolean;
  imageStyle = {
    'width' : '50px',
    'margin' : '2px'
  };
  listFilter: string = '';
  constructor() {
    this.showImage = false;
    this.products = [
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
        }
    ]
  }

  toggleImage():void {
    this.showImage = !this.showImage;
  }

  setProductRating(product, rating) {
    console.log('setProductRating = '+ rating);
    product.rating = rating;
  }

  ngOnInit(): any {
    console.log('in the ngOnInit()!!!!');
  }
} 
