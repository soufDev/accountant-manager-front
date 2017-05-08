import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.services';
import {Router} from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {Http, RequestOptions, Response} from "@angular/http";

import {saveAs} from 'file-saver';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  internalError: boolean =false;

  user: any = {};
  validationEqualPassword: boolean = true;
  registerBackend: boolean = true;
  registerSuccess = false;
  registerError = false;

  load = localStorage.getItem('currentUser');
  loading: boolean = false;


  pdfURL: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private domSanitizer: DomSanitizer,
    private http: Http,
  ) { }

  ngOnInit() {
    if(this.load) {
      this.router.navigate(['/admin']);
    }else {
      this.loading = true;
    }
  }

  registerAccount() {
    if(this.user.password === this.user.confirm_password) {
      this.validationEqualPassword = true;
      let data = {
        'last_name': this.user.last_name,
        'first_name': this.user.first_name,
        'email': this.user.email,
        'password': this.user.password,
        'confirm_password': this.user.confirm_password,
      };
      this.authService.register(data).subscribe(
        result => {
          let id = result.id;
          console.log('result id', id);
          let candidate = {
            'account': id,
            'birth_date': this.user.birth_date,
            'city_birth': this.user.city_birth,
            'department_birth': this.user.department_birth,
            'country_birth': this.user.country_birth,
            'address': this.user.address,
            'additional_address': this.user.additional_address,
            'zip_code': this.user.zip_code,
            'city_address': this.user.city_birth
          };
          console.log(candidate);
          this.authService.regidterCandidate(candidate).subscribe(
            (response) => {
              this.registerBackend = true;
              this.registerSuccess = true;
              this.registerError = false;
              console.log('candidate response :'+response);
            }, (error) => {
              this.registerBackend = false;
              this.registerSuccess = false;
              this.registerError = true;
              console.log('candidate error: '+error);

            }
          );
        }, error => {
          if(!error) {
            this.registerBackend = false;
            this.registerSuccess = false;
            this.registerError = true;
            this.loading = false;
          }
          console.log('error : '+error.toString());
        }
      )
    } else {
      this.validationEqualPassword = false;
    }
  }

  downloadPDF() {
    this.authService.downloadPDF().subscribe(
      response => {
        let fileURL = URL.createObjectURL(response);
        window.open(fileURL);
      },
      error => console.log(error.json())
    )
  }

  getPdfURL() {

    this.authService.pdfURL().subscribe(
      response => {
        this.pdfURL = response.url;
        this.authService.downloadPDF().subscribe(
          response => {
            let blob = response;
            let fileName = 'contrat.pdf';
            saveAs(blob, fileName);
          }
        ),
          error => console.log(error)

      },
      error => {
            console.log(error);
            this.internalError = true;
      }

    )
  }

  registerCandidate() {
    if (this.user.password === this.user.confirm_password) {
      this.validationEqualPassword = true;
      let data = {
        'last_name': this.user.last_name,
        'first_name': this.user.first_name,
        'email': this.user.email,
        'password': this.user.password,
        'confirm_password': this.user.confirm_password,
      };
      let candidate = {
        'account': data,
        'birth_date': this.user.birth_date,
        'city_birth': this.user.city_birth,
        'department_birth': this.user.department_birth,
        'country_birth': this.user.country_birth,
        'address': this.user.address,
        'additional_address': this.user.additional_address,
        'zip_code': this.user.zip_code,
        'city_address': this.user.city_birth
      };
      this.authService.regidterCandidate(candidate).subscribe(
        result => {
          this.registerBackend = true;
          this.registerSuccess = true;
          this.registerError = false;
          console.log('candidate response :'+result);
          console.log(result)
        }, error => {
          this.registerBackend = false;
          this.registerSuccess = false;
          this.registerError = true;
          console.log('candidate error: '+error);
        }
      )
    } else {
      this.validationEqualPassword = false;
    }
  }


}
