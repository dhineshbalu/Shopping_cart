import { Injectable } from '@angular/core';

import { CanActivate , Router , RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthguardService implements CanActivate{

  constructor(private auth : AuthService , private router : Router ) { }

  canActivate()
  {
      if(this.auth.user)
      return true;

     

      this.router.navigate['/main'];

}
}
