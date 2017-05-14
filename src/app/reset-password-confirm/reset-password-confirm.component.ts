import { Component, OnInit } from '@angular/core';
import {PasswordForgotService} from '../services/password-forgot.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-reset-password-confirm',
  templateUrl: './reset-password-confirm.component.html',
  styleUrls: ['./reset-password-confirm.component.css']
})
export class ResetPasswordConfirmComponent implements OnInit {
  model: any = {};
  message: string;
  same_password_message: string;
  same_password: boolean;
  activateSucess: boolean;
  activateError: boolean;


  constructor(
    private passwordForgotService: PasswordForgotService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateError = false;
    this.activateSucess = false;
    this.same_password = false;

  }

  resetPassword() {
    let new_password = this.model.new_password,
      re_new_password = this.model.re_new_password;
    if (new_password !== re_new_password) {
      this.same_password_message = "Veuillez saisir le meme mot de passe a chaque fois";
      this.same_password = true;
    } else {
      this.activatedRoute.params
        .switchMap(
          (params: Params) => this.passwordForgotService.passwordResetConfirm(params['uid'], params['token'], new_password, re_new_password)
        )
        .subscribe(response => {
          console.log('reset password '+response);
          this.message = "Bravo !, \n\nVotre mot de passe a été initialisé veuillez retourner"+
            " a la page de Connexion pour accéeder a la plaforme avec votre nouveau mot de passe";
          this.activateSucess = true;
          this.activateError = false;
        }, error => {
          this.message = "une erreur est servenu Veuillez contacter l'administrateur";
          this.activateSucess = false;
          this.activateError = true;
          console.log('error reset password: '+error._body)
        })
    }

  }

}
