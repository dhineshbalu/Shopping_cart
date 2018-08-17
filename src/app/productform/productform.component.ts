import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../service/category.service';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';


import { Router } from '@angular/router';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {
category: any[];
catarray;
product;
id;
  constructor(private cservice : CategoryService , 
    private pservice : ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { 

    
  
    var a=[];
    this.cservice.getCategories().subscribe(function(data)
    {
     
      this.category = data.json();
    // console.log(this.category);

   var keys =  Object.keys(this.category);
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

    var datass= [];
    var objs;
  this.id  =   this.route.snapshot.paramMap.get('id');
    if(this.id)
    {
  this.pservice.getProductById(this.id).subscribe((data)=>
  {
    var datas = data.json();
    
    

       objs = datas[this.id];

    objs.keyvalue = this.id;

    // console.log(objs);
    datass.push(objs);
    this.product = datass;
    console.log(this.product[0]);
    // console.log(datass);
  
  });
  
  
    }
    

  }

  ngOnInit() {
    
  
  }

  save(product)
  {
    var self = this;
    var g  = 0;
  if(this.id)
  {
    console.log(product);
    self.pservice.update(this.id,product).subscribe(function(data)
  {
    self.router.navigate(['/manageproduct']);  
    
  });
   
  }
  else
  {
    
    // console.log(product);
    this.pservice.save(product).subscribe(data=>{
      self.router.navigate(['/manageproduct']);  
      
    })
  } 
  
}

delete()
{
 var self = this; 
  this.pservice.deletee(this.id).subscribe(data=>
  {
    self.router.navigate(['/manageproduct']);  
    console.log(data);
  });
}



}
