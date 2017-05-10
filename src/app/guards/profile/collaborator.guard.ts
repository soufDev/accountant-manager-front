import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CollaboratorGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkCollaborator();
  }

  canActivatedChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.canActivate(next, state);
  }

  canLoad() {
    return this.checkCollaborator()
  }

  checkCollaborator() {
    let profile = JSON.parse(localStorage.getItem('profile')).profile.type;
    if (profile === "Collaborateur") {
      return true;
    }
    this.router.navigate(['/admin']);
    return false;
  }
}
