import { Injectable } from '@angular/core';

import   { Http } from '@angular/http';




@Injectable()
export class ProductService {

  product: any[];
  singleproduct:any[];
  filteredProducts;
  catg=null;
  constructor(private http: Http ) { }

  save(product)
  {
      return   this.http.post('https://angu-e89d2.firebaseio.com/product.json',product);
  }

  getProducts()
  {
    var products = [];
    this.http.get('https://angu-e89d2.firebaseio.com/product.json').subscribe(function(data)
  {
    var datas = data.json();
    var keys = Object.keys(data.json());
    for(var i=0;i<keys.length;i++)
    {
      var k = keys[i];
 
      var objs = datas[k];

    objs.keyvalue = k;
    // console.log(objs);
      //  console.log(datas[k].title);

       products.push(objs);
   
    }
  });

  this.product = products;

  }

 

  getProduct()
  {
    var a = [];
    // this.filteredProducts=[];
   this.http.get('https://angu-e89d2.firebaseio.com/product.json').subscribe(function(data)
  {
    var datas = data.json();
    var keys = Object.keys(datas);
    for(var i=0;i<keys.length;i++)
      {
        
        var k = keys[i];
    
        a.push(datas[k]);
      }
  });
  this.filteredProducts = a;
  console.log(this.filteredProducts);
  }


  getSingleProduct(value)
  {
    var a = [];
    this.catg = value;
    console.log(this.catg)  
    // coknsole.log(this.catg);
    this.http.get('https://angu-e89d2.firebaseio.com/product.json').subscribe(function(data)
    {
      var datas = data.json();
      var keys = Object.keys(datas);
      for(var i=0;i<keys.length;i++)
        {
          var k = keys[i];
         console.log(datas[k].category);
         if(datas[k].category===value)
            a.push(datas[k]);
        }
        // this.filteredProducts =  a.filter(p=> {
        //   console.log(p.category + "===" + value);
        //   console.log((p.category as string)===value);
        //   (p.category as string)==value});
        //   // console.log(a);
      
   
    });
    this.filteredProducts = a;
    console.log(this.filteredProducts)


  }


  getProductById(key)
  {
   
   return  this.http.get('https://angu-e89d2.firebaseio.com/product.json');


  // console.log(this.singleproduct);
 
  }
  update(id,product)
  {
  return  this.http.patch('https://angu-e89d2.firebaseio.com/product/'+id+'.json',JSON.stringify(product));
  }

  deletee(id)
  {
    return this.http.delete('https://angu-e89d2.firebaseio.com/product/'+id+'.json');
  }

 

  getCategory()
  {
    return this.http.get('https://angu-e89d2.firebaseio.com/categories.json');
  }

  addProduct(form)
  {
   this.http.post('https://angu-e89d2.firebaseio.com/product.json',JSON.stringify(form)).subscribe(data => console.log(data.json()));
  }

}
