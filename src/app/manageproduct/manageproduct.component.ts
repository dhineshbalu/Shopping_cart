import { Component, OnInit } from '@angular/core';

import { ProductService }  from '../service/product.service';

@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrls: ['./manageproduct.component.css']
})
export class ManageproductComponent implements OnInit {

   products;
  constructor(private pservice: ProductService) { 
 
    this.pservice.getProducts();
    this.products = this.pservice.product;
  console.log(this.products);

  }

  ngOnInit() {

    
  }

}
