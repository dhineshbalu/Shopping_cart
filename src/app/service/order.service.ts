import { Injectable } from '@angular/core';

import { Http }  from '@angular/http';
@Injectable()
export class OrderService {

    orderList;
    orderProduct;
  constructor(private http: Http) {
    this.orderList=[];
    this.orderProduct=[];
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
     
      var obj = datas[k];
      obj.keyvalue = k;
     self.orderList.push(obj);
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
