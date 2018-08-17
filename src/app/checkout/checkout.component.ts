import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from '../service/shopping-cart.service';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService : ShoppingCartService ,
  private authService : AuthService) {
  this.cartService.getProducts();

   }
    
  ngOnInit() {
  }
 submit(form)
 {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  
  var newdate = year + "/" + month + "/" + day;
  console.log(newdate);
  form.date = newdate;
  form.username = this.authService.user.displayName;
  form.product = this.cartService.products;
  console.log(form);
  // console.log(this.cartService.products)
  this.cartService.postOrder(form);
  this.cartService.deleteProduct();
 }
}
