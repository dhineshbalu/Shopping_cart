import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import { AuthService } from '../service/auth.service';
import  { Router  , ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  url;
  user : firebase.User;
  constructor(private auth : AuthService , private route : ActivatedRoute , private router: Router) { }

  ngOnInit() {
  }

  call()
  {
    this.auth.login();
    
            //   this.url =  this.route.snapshot.queryParams.get('returnUrl');
            //   console.log(this.url);
            // this.router.navigateByUrl(this.url);
   
  }

}
