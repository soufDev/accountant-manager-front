import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route,
  NavigationExtras
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../../services/auth.services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let url: string = state.url;
      return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;

    console.log('canload route path : '+url+"\nthis.checkLogin(url): "+this.checkLogin(url));
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
      //console.log("this.authService.loggedIn: "+this.authService.isLoggedIn());
      if (localStorage.getItem('currentUser')) {
        return true;
      }
      this.authService.redirectUrl = url;

      let navigationExtras: NavigationExtras = {
        queryParams: { 'token': this.authService.token },
        fragment: '',
      };

      this.router.navigate(['/'], navigationExtras);
      return false;

  }
}
