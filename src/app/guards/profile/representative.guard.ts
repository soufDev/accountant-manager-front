import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {CandidateGuard} from "./candidate.guard";

@Injectable()
export class RepresentativeGuard implements CanActivate {

  constructor(private router: Router, private candidatGuard: CandidateGuard) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let result = this.checkRepresentative();
    console.log('canActivate representative: '+result);
    return result;
  }

  canActivatedChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.canActivate(next, state);
  }

  canLoad() {
    let result = this.checkRepresentative();
    return result;
  }

  checkRepresentative() {
    let profile = JSON.parse(localStorage.getItem('profile')).profile.type;
    if (profile === "Mandataire Physique" || profile === "Mandataire Morale" || profile === "Candidat") {
      return true;
    }
    this.router.navigate(['/admin']);
    return false;
  }
}
