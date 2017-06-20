import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
/**
 * Created by gjoosen on 20/06/2017.
 */

@Injectable()
export class LoginService {

  private authenticationUrl = '145.48.6.73:8081/apiV1/authenticate';

  loggedIn: boolean;
  token: string;

  constructor(private http: Http){}

  public login(username: string, password: string): Observable<string> {
      const body = '{ "username": "admin", "password":"admin"}';
      return this.http.post(this.authenticationUrl, body).map(res => res.json()).catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err =  JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
