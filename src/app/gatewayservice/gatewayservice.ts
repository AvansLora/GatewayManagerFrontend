/**
 * Created by gjoosen on 10/06/2017.
 */


import {Injectable} from '@angular/core';
import {GatewayModel} from '../gatewaymodel/gatewaymodel';
import {BehaviorSubject, Observable} from 'rxjs';
import {Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {LoginService} from '../login/loginService';

@Injectable()
export class GatewayService {
  selectedGateway: BehaviorSubject<GatewayModel>;
  private gatewaysUrl = 'http://145.48.6.73:8081/apiV1/listgateways';
  private gatewayValues = 'http://145.48.6.73:8081/apiV1/allmeasurements';

  constructor(private http: Http, private loginService: LoginService){}

  public getGatewaysList(): Observable<string> {
    const head = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    const options = new RequestOptions({headers : head});

    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('token', this.loginService.token);

    const body = urlSearchParams.toString();

    return this.http.post(this.gatewaysUrl, body, options).map(res => res.json()).catch(this.handleError);
  }

  public getAllMeasurements(gatewayID: number): Observable<number>{
    const head = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    const options = new RequestOptions({headers : head});

    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('token', this.loginService.token);
    urlSearchParams.append('gatewayid', gatewayID.toString());

    const body = urlSearchParams.toString();

    return this.http.post(this.gatewayValues, body, options).map(res => res.json()).catch(this.handleError);
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
