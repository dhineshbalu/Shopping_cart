import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
@Injectable()
export class CategoryService {

  categories;
  constructor(private http: Http) { }

  getCategories()
  {
    return   this.http.get('https://angu-e89d2.firebaseio.com/categories.json');
  }

}
