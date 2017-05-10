
import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response, ResponseContentType} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {saveAs} from 'file-saver';

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
import {environment} from '../environments/environments';

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
      'Authorization': 'JWT ' + this.token,
    }
  );


  constructor(private http: Http, private router: Router) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post(environment.api_url + 'auth/login/', {email: email, password: password})
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json().token;


        if (token) {
          localStorage.setItem('currentUser', JSON.stringify({token: token}));
          return true;
        }
        return false;
      }).catch(this.handelError);
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
    this.header.set('Authorization', 'JWT '+this.token);
    let options = new RequestOptions({headers: this.header});
    return this.http.get(environment.api_url+'auth/me/', options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError)
  }

  logout() {
    // clear token remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem('profile');
    localStorage.removeItem('currentUser');
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  // register new candidat
  register(data): Observable<any> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(environment.api_url+'auth/register/', data, options)
      .map(this.extractData)
      .catch(this.handelError);
  }

  pdfURL(): Observable<any> {
    let options = new RequestOptions({});
    return this.http.get(environment.api_url+'contract/', options)
      .map(this.extractData)
      .catch(this.handelError)
  }

  downloadPDF(): Observable<any> {

    let headers = new Headers({
      'Content-Type': 'application/json',
       //'Accept': 'application/pdf'
    });

    return this.http.get('http://localhost:8000/media/files/contrat.pdf', {responseType: ResponseContentType.Blob})
      .map( (response) => {
          return new Blob([response.blob()], {type: 'application/pdf'})

        }
      )
      .catch(this.handelError)
  }

  downloadFile(url) {
    this.http.get(url).subscribe(
      (response: Response) => {
        let mediaType = 'application/pdf';
        let blob = new Blob([response], {type: mediaType});
        let filename = 'contrat.pdf';
        saveAs(blob, filename);
      });
  }

  registerCandidate(data): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(environment.api_url+'users/candidates/', data, options)
      .map(this.extractData)
      .catch(this.handelError)
  }

  // get profile after login
  getProfile(id): Observable<any> {
    this.headers.set('Authorization', 'JWT '+this.token);
    let options = new RequestOptions({headers: this.headers});
    return this.http.get(environment.api_url+'users/profile/'+id, options)
      .map(response => {
          return response.json()
      })
      .catch(this.handelError)
  }
}
