import { Component, OnInit } from '@angular/core';
import { MyorderService } from '../service/myorder.service';
@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {

  constructor(private myOrder: MyorderService) { 
    myOrder.getOrder();
  }

  ngOnInit() {
  }

}
