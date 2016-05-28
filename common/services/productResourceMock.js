 /**
 * Created by jhlee on 2016. 5. 28..
 */
 (function() {
     "use strict";
     var app = angular.module("productResourceMock", ["ngMockE2E"]);
     app.run(function($httpBackend) {
         var products = [
             {
                 "productId": 1,
                 "productName": "iMac24",
                 "productCode": "APP-MAC-011",
                 "releaseDate": "2016/12/11",
                 "imageUrl":"https://www.apple.com/pr/products/images/iMac27_iMac21_Photos_PRINT_131020_HERO.jpg",
                 "price":1980,
                 "category": "computer",
                 "tags": ["apple", "mac", "osx"],
                 "description": "beautiful computer ever exist"
             },
             {
                 "productId": 2,
                 "productName": "Surface",
                 "productCode": "MSC-SFC-042",
                 "releaseDate": "2016/12/11",
                 "imageUrl": "http://cdn2.pcadvisor.co.uk/cmsdata/reviews/3364791/Microsoft_Surface_RT.jpg",
                 "price":2150,
                 "category": "computer",
                 "tags": ["microsoft", "surface", "laptop", "windows10"],
                 "description": "improved laptop over iPad"
             },
             {
                 "productId": 3,
                 "productName": "CreepyDesktop",
                 "productCode": "MSC-DSK-001",
                 "releaseDate": "1995/09/08",
                 "imageUrl": "http://www.ormondbeachcomputerrepair.com/wp-content/uploads/2016/01/computer-repair.png",
                 "price":210,
                 "category": "computer",
                 "tags": ["old", "pc", "windows95"],
                 "description": "very old computer worse than iphone"
             },
             {
                 "productId": 4,
                 "productName": "Lisa",
                 "productCode": "APP-MAC-002",
                 "releaseDate": "1989/06/21",
                 "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQBL7yM0GJecNmjZdn-fSwg13Xt_9fmNGaAVRJ16yBMoUV-q0MA",
                 "price":1150,
                 "category": "computer",
                 "tags": ["apple", "mac", "apple-dos"],
                 "description": "miss you jobs"
             }
         ];
         var productUrl = "/api/products";
         $httpBackend.whenGET(productUrl).respond(products);

        var editingRegexp = new RegExp(productUrl + "/[0-9]+");
        $httpBackend.whenGET(editingRegexp).respond(function (method, url, data) {
            var product = { "productId": 0 };
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length-1];
            if(id > 0) {
                for(var i=0; i<products.length; ++i) {
                    if(products[i].productId == id) {
                        product = products[i];
                        break;
                    }
                }
            }
            return [200, product, {}];
        });

        $httpBackend.whenPOST(productUrl).respond(function (method, url, data) {
            var product = angular.fromJson(data);
            if(!product.productId) {
                // new product
                product.productId = products[products.length-1].productId + 1;
                products.push(product);
            } else {
                for(var i=0; i<products.length; ++i) {
                    if(products[i].productId == product.productId) {
                        products[i] = product;
                        break;
                    }
                }
            }
            return [200, product, {}];
        });
         /* Created by jhlee on 2016. 5. 28..
          */

     });

 }())