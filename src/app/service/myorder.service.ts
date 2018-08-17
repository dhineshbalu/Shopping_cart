import { Injectable } from '@angular/core';
import { Http }  from '@angular/http';
import { AuthService } from './auth.service';
@Injectable()
export class MyorderService {

  username;
  orderList;
  orderProduct;


  constructor(private http: Http , private auth: AuthService) {
    console.log(auth.user.displayName);
    this.orderList = [];
    this.orderProduct=[];

    this.username = auth.user.displayName;
   }

   getOrder()
   {
    this.orderList = [];
    var self = this;
    this.http.get('https://angu-e89d2.firebaseio.com/checkout.json').subscribe((data)=>{
      console.log(data.json());
    var datas = data.json();
    var keys = Object.keys(datas);
    for(var i=0;i<keys.length;i++)
    {

      var k = keys[i];
     
      if(datas[k].username==self.username)
      {
        // console.log("OOOOOOOOOOOOOth");
      var obj = datas[k];
      obj.keyvalue = k;
     self.orderList.push(obj);
      }
    }
    console.log(self.orderList);
  
    })
   }
   getOrderById(id)
  {
    this.orderProduct = [];
    var self = this;
    this.http.get('https://angu-e89d2.firebaseio.com/checkout/' + id+'.json').subscribe((data)=>{
      console.log(data.json());
      var datas = data.json();
       self.orderProduct = datas.product;
       console.log(self.orderProduct);
    });
  }

}
