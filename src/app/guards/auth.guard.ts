/*
What are Auth guard in Angular?
AuthGuard is a class which implements the interface CanActivate , to decide whether the user has 
access/permission to view specific page / route / path in the application or not. 
This will be useful when we need authentication/authorization based control over the application. 

The canActivate guard will only active routes when it returns 'true'.
To use/implement this guard we need to go there where we registered all child routes which is in 
app-routing.module.ts.
*/

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private auth: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if(!this.auth.isLoggedIn()){
        this.router.navigate(['login']);
        return false;
      }
      return this.auth.isLoggedIn();
    } 
  
    /*
    The above function is checking that if there is a token in the local storage, it will return true which 
    will let the user in the admin page. If there is no token in the local storage, it will navigate the user
    back to login page and return false so that the user will not get in the admin page.
    */
}
