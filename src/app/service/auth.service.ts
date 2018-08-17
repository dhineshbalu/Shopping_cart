import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { Http } from '@angular/http';
import { isPrimitive } from 'util';

@Injectable()
export class AuthService {

  user: firebase.User;
  username: string;
  emailid: string;
  isAdmin:boolean;
 

  constructor(private authservice : AngularFireAuth , private http : Http) {
    authservice.authState.subscribe(user=> {
      this.user = user;
      // console.log(this.user);

  var ispresent=false;
  var usersObject;
  var users;
  var self = this;
      if(this.user)
      {
              this.http.get('https://angu-e89d2.firebaseio.com/users.json').subscribe(function(success)
            {
            
              // console.log(success.json());
usersObject = success.json();
   users= Object.keys(usersObject);

   for(var i=0;i<users.length;i++)
   {
     var k = users[i];
     // console.log(usersObject[k].username);

    
     if(usersObject[k].isAdmin==true && usersObject[k].username==user.displayName)
     {
        console.log(usersObject[k].username);
       self.isAdmin=true;
       console.log("isadmin" + self.isAdmin);
     }
        var name = user.displayName;
       if(user.displayName==usersObject[k].username)
       {
       ispresent=true;
         console.log("got it ");

         console.log(ispresent);
       }
   }

   console.log(ispresent);
   if(ispresent!=true)
   {
    self.http.post('https://angu-e89d2.firebaseio.com/users.json' , {
       username: self.user.displayName,
       email : self.user.email,
       isAdmin:false
     }).subscribe(function(data)
   {
     console.log(data);
   },function(error)
 {
   console.log("error" , error);
 }); 
 }

});
     
 
  
          

        
  
   }


   
 
  });
}


  login()
  {
    this.authservice.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout()
  {
    this.authservice.auth.signOut();
  }

  save()
  {

  }

}
