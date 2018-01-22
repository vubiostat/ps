import { Injectable } from '@angular/core';
import {
  Headers,
  RequestOptions,
  Http,
  ResponseContentType
} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
import { TTest } from './t-test';

@Injectable()
export class TTestService {
  private apiUrl = `${environment.apiUrl}/ttests`;

  constructor(private http: Http) { }

  calculate(model: TTest): Promise<any> {
    let url = `${this.apiUrl}/calc`;
    let params = model.params();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.
      post(url, JSON.stringify(params), options).
      toPromise().
      then(response => response.json()).
      catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
