import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ParseTreeResult } from '@angular/compiler';
import { AuthService } from '../services/auth.service';
import { config } from '../consts/defines';

@Injectable()
export class AuthUserGuard implements CanActivateChild, CanLoad {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    console.log('canLoad', route, 'isLogedin', this.authService.isLogedin);
    if (localStorage.getItem('user')) {
      return true
    }else{
      this.router.navigate([config.auth.login.route])
      return false
    }
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('canActivateChild');
      
    if (localStorage.getItem('user')) {
      this.router.navigate([config.user.allUsers.route])
      return false;
    } else {
      return true;
    }
  }
}
