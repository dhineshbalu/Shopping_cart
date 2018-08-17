import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../service/shopping-cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService : ShoppingCartService) {
  // this.cartService.getTotal();
  this.cartService.getProducts();
   }

  ngOnInit() {
  }

}
