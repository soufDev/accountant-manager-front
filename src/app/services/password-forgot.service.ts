import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../environments/environments';

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
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PasswordForgotService {

  constructor(private http: Http) { }

  // forgot password send email
  forgotPasswordEmail(email: string): Observable<any> {
    let header = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: header});
    return this.http.post(environment.api_url+'auth/password/reset/', {email: email})
      .map(this.extractData)
      .catch(this.handelError)
  }

  // reset password confirm
  passwordResetConfirm(uid: string, token: string, new_password: string, re_new_password: string): Observable<any> {
    let data = {
      uid: uid,
      token: token,
      new_password: new_password,
      re_new_password: re_new_password
    };
    return this.http
      .post(environment.api_url+'auth/password/reset/confirm/', data)
      .map(this.extractData)
      .catch(this.handelError)
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

}
