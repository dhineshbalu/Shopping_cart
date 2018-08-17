import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
@Component({
  selector: 'app-manageorder',
  templateUrl: './manageorder.component.html',
  styleUrls: ['./manageorder.component.css']
})
export class ManageorderComponent implements OnInit {

  constructor(private orderService : OrderService) {
   
    orderService.getOrder();
  }

  ngOnInit() {
  }

}
