import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {AuthService} from '../services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  model: any = {};
  error: string;
  load = localStorage.getItem('currentUser');
  loading: boolean = false;

  constructor(
    private router: Router,
    private authenticationService: AuthService
  ) { }


  ngOnInit() {
    if (this.load) {
      this.router.navigate(['/admin'])
    } else {
      this.loading = true;
    }

  }

  login() {
    //this.error = "Tentative d'authentification";

    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(response => {
        console.log('response login : '+response);

        let redirect = this.authenticationService.redirectUrl ? this.authenticationService.redirectUrl : '/admin';

        let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };
        //this.error = 'Email ou/et Mot de passe ' + (this.authenticationService.isLoggedIn() ? ' Correct': ' Incorrect');
        // redirect to the dashboard
        this.router.navigate([redirect]);

      },
        error => {
          // login failed
          this.error = 'Email ou/et Mot de passe Incorrect';
        }
      );

  }



}
