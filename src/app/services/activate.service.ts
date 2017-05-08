import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
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

@Injectable()
export class ActivateService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

  activate(id, token): Promise<any> {
    let options = new RequestOptions({headers: this.headers});
    let data = {
      "uid": id,
      "token": token
    };
    return this.http.post(environment.api_url+'auth/activate/', data)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
