import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import  { AuthService } from '../service/auth.service';
import { ShoppingCartService } from '../service/shopping-cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 

  constructor(public auth : AuthService , private cartService : ShoppingCartService  ) {
    this.cartService.getTotal();       
   }

  ngOnInit() {

  }

  logout()
  {
    this.auth.logout();
      
  }

}
