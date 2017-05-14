import { Component, OnInit } from '@angular/core';
import {Router, RouterLinkActive} from '@angular/router';
import {AuthService} from '../services/auth.services';
import {PasswordForgotService} from '../services/password-forgot.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  loading = false;
  model: any = {};
  load = localStorage.getItem('currentUser');
  error: string;

  send_success: boolean;
  message_success: string;

  constructor(
    private router: Router,
    private passwordForgotService: PasswordForgotService) { }

  ngOnInit() {
    if (this.load) {
      this.router.navigate(['/admin']);
    } else {
      this.send_success = false;
      this.loading = true
    }
  }

  sendEmail() {

    this.passwordForgotService.forgotPasswordEmail(this.model.email)
      .subscribe(
        (response) => {
          console.log('send email : '+response);
          this.message_success = "Veuillez aller verifier votre boite email pour reinitialiser votre mot de passe";
          this.send_success = true;
        }, (error) => {
          this.send_success = false;
          // send reset password failed
          this.error = "Une Erreur c'est produite veuillez retaper votre email"
        }
      );
    }

}
