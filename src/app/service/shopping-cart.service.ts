import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
// import { ProductComponent } from '../product/product.component';
import  { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class ShoppingCartService {
  products;
  constructor(private http: Http , private router:Router , private auth:AuthService) {
    this.products = [];
   }

  goTo = 1;

  totalQuantity=0;
 totalCost = 0;

  addToCart(product) {
    this.totalQuantity=0;
    this.totalCost = 0;
     this.getTotal();
    this.searchCart(product);

  }

  searchCart(product) {
    
    var b = 1;
    let self = this;
    this.http.get('https://angu-e89d2.firebaseio.com/shopping-cart/items/product.json').subscribe(function (data) {
      var datas = data.json();
      var keys = Object.keys(datas);
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var obj = datas[k];
       
        if (obj.category == product.category && obj.title == product.title && obj.price == product.price) {
          b = 0;
          // console.log("Asdf");
          obj.keyvalue = k;
          obj.quantity += 1;
          // self.totalQuantity = obj.quantity;
          self.updateCart(obj, k)
        }

      }

      if (b == 1) {
        // console.log("working");
        self.totalQuantity = 0;
        self.pushToCart(product);
      }
    });
  }

  pushToCart(product) {
    var obj = product;
    obj.quantity = 1;
    console.log("push process")
    this.http.post('https://angu-e89d2.firebaseio.com/shopping-cart/items/product.json', JSON.stringify(obj)).subscribe(function (data) {
      console.log(data);
    });
    // console.log(this.totalQuantity)

  }
  updateCart(product, key) {

    console.log("update process");
    // console.log(product);
    this.http.patch('https://angu-e89d2.firebaseio.com/shopping-cart/items/product/' + key + '.json', JSON.stringify(product)).subscribe(data => console.log(data));
    // console.log(this.totalQuantity)
  // console.log("total" + this.totalQuantity);

 
  }
  getTotal()
  {
    var d ;
  //  this.http.get('https://angu-e89d2.firebaseio.com/shopping-cart/items/product/' + key + '.json')
  const self = this;
  this.http.get('https://angu-e89d2.firebaseio.com/shopping-cart/items/product.json').subscribe(function (data) {
     d = 0;
   
  var datas = data.json();
    var keys = Object.keys(datas);
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      var obj = datas[k];
    
    //  d = d+obj.quantity;
    if(obj.quantity)
    self.totalQuantity +=obj.quantity;
        console.log(obj.quantity)
     
    }
    // self.totalQuantity = d;
 

    // console.log(self.totalQuantity);
  });
  console.log("quants"+self.totalQuantity);
  }
  
getProducts()
{
var self = this;
this.totalCost = 0;
   this.http.get('https://angu-e89d2.firebaseio.com/shopping-cart/items/product.json').subscribe(function(data)
  {

    self.products = [];
    console.log(data);
    var datas = data.json();
    var keys = Object.keys(datas);
    for(var i=0;i<keys.length;i++)
    {
      var k = keys[i];
       if(self.products[k]!="key1")
        {
      self.products.push(datas[k]);
        if(datas[k].quantity)
         self.totalCost += datas[k].price * datas[k].quantity;

         console.log(self.totalCost);
      // console.log(self.products);
    }
  }
  });
}

deleteProduct()
{
  var self = this;
  //  this.http.delete('https://angu-e89d2.firebaseio.com/shopping-cart/items/product.json').subscribe(data => console.log(data));
      this.http.get('https://angu-e89d2.firebaseio.com/shopping-cart/items/product.json').subscribe(data=>{
        var datas = data.json();
        var keys = Object.keys(datas);
        for(var i=0;i<keys.length;i++)
        {
          var k = keys[i];
          if(datas[k].username==this.auth.user.displayName)
          {
   self.http.delete('https://angu-e89d2.firebaseio.com/shopping-cart/items/product/' + k + '.json').subscribe(data => console.log(data));
         
          }
        }
      })
}
deleteAllProduct()
{
  var self = this;
  //  this.http.delete('https://angu-e89d2.firebaseio.com/shopping-cart/items/product.json').subscribe(data => console.log(data));
      this.http.get('https://angu-e89d2.firebaseio.com/shopping-cart/items/product.json').subscribe(data=>{
        var datas = data.json();
        var keys = Object.keys(datas);
        for(var i=0;i<keys.length;i++)
        {
          var k = keys[i];
          if(k!="key1")
          {
   self.http.delete('https://angu-e89d2.firebaseio.com/shopping-cart/items/product/' + k + '.json').subscribe(data => console.log(data));
         
          }
        }
        self.router.navigate(['/']);
      })
}

postOrder(form)
{
  var self = this;
    this.http.post('https://angu-e89d2.firebaseio.com/checkout.json',JSON.stringify(form)).subscribe(data => {
      self.router.navigate(['/cart/order']);
    });
}

}

