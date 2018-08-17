import { Component, OnInit, OnChanges } from '@angular/core';

import { ProductService } from '../service/product.service';

import { ShoppingCartService } from '../service/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  category: any[];
  catg;

  constructor(public pservice: ProductService, private route: ActivatedRoute , private cartService : ShoppingCartService
  ,private authService : AuthService
  ) {
 
    var b = [];
    // var c = [];
    // this.filteredProducts = [];
    // this.cartService.getTotal();
    this.pservice.getProduct();
  
  

    this.pservice.getCategory().subscribe(function (data) {
      console.log(data.json());
      var datas = data.json();
      var keys = Object.keys(datas);
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var obj = datas[k];
        obj.keyvalue = keys[i];
        b.push(obj);
      }
    });
    this.category = b;
  }




  ngOnInit() {

  }
  addToCart(product)
  {
    product.username= this.authService.user.displayName;
    
    var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  
  var newdate = year + "/" + month + "/" + day;
  console.log(newdate);
  product.date = newdate;
     this.cartService.addToCart(product);
  }

}