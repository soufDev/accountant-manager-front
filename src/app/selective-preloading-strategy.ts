import {PreloadingStrategy, Route} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';

@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {
  preloadModule: string[] = [];
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      // add the route path to the preload module array
      this.preloadModule.push(route.path);

      // see the result
      console.log('Preloaded: ' + route.path);

      return load();
    } else {
      return Observable.of(null);
    }
  }
}
