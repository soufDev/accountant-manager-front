import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {AuthService} from './auth.services';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
let url = 'http://localhost:8000/auth/';

@Injectable()
export class UserService {
  constructor(
    private http: Http,
    private authenticationService: AuthService
  ) {}

  getUser() {
    let headers = new Headers({
        'Authorization': 'Token ' + this.authenticationService.token,
        'Content-Type': 'application/json'
      }
    );
    let options = new RequestOptions({headers: headers});
    console.log(url+'me/');
    let user;
    // get users from api
    this.http.get(url+'me/', options)
      .map((response: Response) => {
        console.log(JSON.parse(response.text()).first_name);
        return JSON.parse(response.text());
      });
  }

  getUsers(): Observable<User[]> {
    // add authorization header with jwt token
    let headers = new Headers({
      'Authorization': 'JWT ' + this.authenticationService.token,
      'Content-Type' : 'application/json'}
    );
    let options = new RequestOptions({ headers: headers});

    // get users from api
    return this.http.get(url, options)
      .map((response: Response) => response.json().users);
  }



}
