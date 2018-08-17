import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyorderComponent } from './myorder/myorder.component';
import { ManageorderComponent } from './manageorder/manageorder.component';
import { ManageproductComponent } from './manageproduct/manageproduct.component';
import { MainComponent } from './main/main.component';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';
import { AngularFireAuthModule} from 'angularfire2/auth';

import { AuthService } from './service/auth.service';
import { AuthguardService } from './service/authguard.service'; 
import { HttpModule } from '@angular/http';
import { ProductformComponent } from './productform/productform.component';

import { CategoryService } from './service/category.service';
import { ProductService } from './service/product.service';
import { ShoppingCartService } from './service/shopping-cart.service';
import { ProductComponent } from './product/product.component';
import {  MyorderService } from './service/myorder.service';
// import { NewproductComponent } from './newproduct/newproduct.component';

import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './order/order.component';
import { OrderService } from './service/order.service';
import { VieworderComponent } from './vieworder/vieworder.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyorderComponent,
    ManageorderComponent,
    ManageproductComponent,
    MainComponent,
    LoginComponent,
    ProductformComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    OrderComponent,
    VieworderComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule ,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      {
        path:'',
        component:ProductComponent
      },
      {
        path:'cart',
        component:CartComponent
      },
      {
                path:'cart/checkout',
                component:CheckoutComponent
      },
      {
        path:'cart/order',
        component:OrderComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'myorder',
        component:MyorderComponent,
        canActivate: [AuthguardService]
        
      },
      {
      path:'myorder/:id',
      component:VieworderComponent,
      canActivate: [AuthguardService]

      },
      {
        path:'manageorder',
        component:ManageorderComponent,
        canActivate: [AuthguardService]

      },
      {
        path:'manageorder/:id',
        component:VieworderComponent,
        canActivate: [AuthguardService]

      },
      {
        path:'manageproduct/:id',
        component:ProductformComponent,
        canActivate: [AuthguardService]

      },
      {
        path:'manageproduct',
        component:ManageproductComponent,
        canActivate: [AuthguardService]

      },
      
      {
        path:'manageproduct/new',
        component:ProductformComponent,
        canActivate: [AuthguardService]

      },
      {
        path:'add',
        component:AddComponent
        },
      {
        path:'main',
        component:MainComponent,
        canActivate: [AuthguardService]

      }
    ]
    )
  ],
  providers: [
    AuthService,
    AuthguardService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService,
    MyorderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
