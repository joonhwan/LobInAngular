//
// var editingRegexp = new RegExp(productUrl + "/[0-9]+");
// $httpBackend.whenGET(editingRegexp).respond(function (method, url, data) {
//     var product = { "productId": 0 };
//     var parameters = url.split('/');
//     var length = parameters.length;
//     var id = parameters[length-1];
//     if(id > 0) {
//         for(var i=0; i<products.length; ++i) {
//             if(products[i].productId == id) {
//                 product = products[i];
//                 break;
//             }
//         }
//     }
//     return [200, product, {}];
// });
//
// $httpBackend.whenPOST(productUrl).respond(function (method, url, data) {
//     var product = angular.fromJson(data);
//     if(!product.productId) {
//         // new product
//         product.productId = products[products.length-1].productId + 1;
//         products.push(product);
//     } else {
//         for(var i=0; i<products.length; ++i) {
//             if(products[i].productId == product.productId) {
//                 products[i] = product;
//                 break;
//             }
//         }
//     }
//     return [200, product, {}];
// });
/* Created by jhlee on 2016. 5. 28..
 */
