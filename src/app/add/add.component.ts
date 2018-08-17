import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  catarray;
  category: any[];
  
  constructor(private cservice : CategoryService , private router: Router , private pservice: ProductService) {
    var a=[];
    this.cservice.getCategories().subscribe(function(data)
    {
     
      this.category = data.json();
    // console.log(this.category);

   var keys =  Object.keys(this.category);``
     for(var i=0;i<keys.length;i++)
     {
            var k = keys[i];
              // this.catarray.push(this.category[i].name);
              // console.log(this.category[k].name);
              a.push(this.category[k].name);
             
     } 
   
    });

    // console.log(a);
    this.catarray = a;
    console.log(this.catarray);
   }


  ngOnInit() {
  }
  save(form)
  {
    console.log(form);
    this.pservice.addProduct(form);
    this.router.navigate(['/manageproduct']);
  }

}
