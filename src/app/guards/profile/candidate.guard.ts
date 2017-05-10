import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CandidateGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkCandidate();
  }

  canActivatedChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.canActivate(next, state);
  }

  canLoad() {
    return this.checkCandidate()
  }

  checkCandidate() {
    let profile = JSON.parse(localStorage.getItem('profile')).profile.type;
    if (profile === "Candidat") {
      return true;
    }
    this.router.navigate(['/admin']);
    return false;
  }
}
