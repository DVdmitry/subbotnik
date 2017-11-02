import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { NavLinks } from './nav/nav-links';
import { Action} from './actions/action';

@Injectable()
export class AppService {
  private navlinksUrl = 'api/navlinks';
  private actionUrl = 'api/action';
  constructor (private http: Http) {}

  getLinks(): Promise<NavLinks []> {
    return this.http.get(this.navlinksUrl)
      .toPromise()
      .then(response => response.json() as NavLinks[]);
}
  getAction(): Promise<Action> {
    return this.http.get(this.actionUrl)
      .toPromise()
      .then(response => response.json() as Action);
  }

}
