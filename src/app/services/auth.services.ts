
import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import {Router} from '@angular/router';
import {User} from '../models/user';

const url = 'http://localhost:8000/auth/';

@Injectable()
export class AuthService {
  public token: string;
  public user;
  // store the url so we can redirect after logging in
  redirectUrl: string;

  private headers = new Headers({
    'Authorization': 'JWT ' + this.token,
    'Content-Type': 'application/json'
  });
  private header = new Headers({
    'Authorization': 'Token ' + this.token,
  });


  constructor(private http: Http, private router: Router) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    this.getUserAuth().then(user => {
      console.log("user : "+user);
      this.user = user
    });
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post(url + 'login/', {email: email, password: password})
      .map((response: Response) => {
      // login successful if there's a jwt token in the response
        let token = response.json().token;


        if (token) {
          let temp_user;
          this.getUserAuth().then(
            user => temp_user = user
          );
          localStorage.setItem('currentUser', JSON.stringify({user: temp_user, token: token}));
          return true;
        }
        return false;
      });
  }
  /* a revoir au cas ou
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
  */



  private extraDataLogout(res : Response) {
    return res.status;
  }
  get_user(token) {
    let headers = new Headers({
        'Authorization': 'JWT ' + token,
        'Content-Type': 'application/json'
      }
    );
    let options = new RequestOptions({headers: headers});
    return this.http.get(url+'me/', options)
      .map(this.extractData)
      //.catch(this.handelError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { }
  }

  private handelError(error: Response| any) {
    let errMsg: string;
    if(error instanceof Response) {
      const body = error.json() || '';
      const err = body.error.json() || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString()
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getUserAuth(): Promise<User> {
    let headers = new Headers({
        'Authorization': 'JWT ' + this.token,
      }
    );
    let options = new RequestOptions({headers: headers});
    return this.http.get(url+'me/', options)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError)
  }

  logout(): Promise<any> {
    // clear token remove user from local storage to log user out
    let headers = new Headers({
        'Authorization': 'JWT ' + this.token,
      }
    );
    let options = new RequestOptions({headers: headers});
    return this.http.post(url + 'logout/', options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



}
