import { Component, OnInit } from '@angular/core';
import { OrderService } from  '../service/order.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {

  key;
  constructor(private orderService : OrderService , private route: ActivatedRoute) {
    route.paramMap.subscribe((data)=>{
      console.log(data.get('id'));
      this.key = data.get('id');
    this.orderService.getOrderById(this.key);

    });
   }

  ngOnInit() {
  }

}
