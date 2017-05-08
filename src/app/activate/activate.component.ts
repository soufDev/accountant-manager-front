import { Component, OnInit } from '@angular/core';
import {ActivateService} from '../services/activate.service';
import {Http} from '@angular/http';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {

  message: string;
  activateSucess: boolean = true;
  activateError: boolean = false;

  constructor(private activateService: ActivateService,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.activateService.activate(params['id'], params['token']))
      .subscribe(status => {
          console.log('status = ' + status);
          this.message = "Votre Compte Maintenant est activé retourner a la page d'accueil pour vous connecter a la plateforme";
          this.activateSucess = true;
          this.activateError = false;
        },
          error => {
            if (error._body === "{\"detail\":\"Stale token for given user.\"}")
              this.message = "Compte dejà activé";
            else
              this.message = "une erreur est servenu Veuillez contacter l'administrateur";
            this.activateSucess = false;
            this.activateError = true;
            console.log('error : '+error._body)
          }
      )
  }

}
