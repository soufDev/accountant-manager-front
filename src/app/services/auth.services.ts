
import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {User} from '../models/user';

const url = 'http://localhost:8000/auth/';

@Injectable()
export class AuthService {
  public token: string;
  public user;
  loggedIn: boolean;

  // store the url so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: Http) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    this.user = currentUser && currentUser.user;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  setLoggedIn(value: boolean) {
    this.loggedIn = value;
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post(url + 'login/', {email: email, password: password})
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().auth_token;
        // getUser is get request to the backend
        this.getUser(token).then((value: any) =>{
          this.user = value;
        });
        console.log("token = " + token);
        if (token && this.user) {
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({user: this.user, token: token}));
          return true;
        }
        return false;
      });
  }

  getUser(token) {
    let headers = new Headers({
        'Authorization': 'Token ' + token,
        'Content-Type': 'application/json'
      }
    );
    let options = new RequestOptions({headers: headers});
    let user;
    // get users from api
    return new Promise((resolve: any, reject: any) => {
      this.http.get(url+'me/', options)
        .toPromise()
        .then((response: Response) => {
          resolve(response.json());
        });
    });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    //this.setLoggedIn(false);
    this.http.post(url + 'logout/', {})
      .map((response: Response) => {
        console.log('reponse logout : ' + response);
      });
    localStorage.removeItem('currentUser');
    //this.getUser(url+'me/', this.token);
  }


  getAuthToken(email: string, password: string): any {
    return this.http.post(url+'login/', {email: email, password: password})
      .map((response: Response) => {
        JSON.parse(response.json());
      })

  }
}
