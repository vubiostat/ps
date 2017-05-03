import { Injectable } from '@angular/core';
import {
  Headers,
  RequestOptions,
  Http,
  ResponseContentType
} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from '../environments/environment';
import { TTest } from './t-test';
import { GlobalPlotOptions } from './plot-options';

@Injectable()
export class TTestService {
  private apiUrl = `${environment.apiUrl}/ttests`;

  constructor(private http: Http) { }

  create(model: TTest): Promise<any> {
    let params = { model: model };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.
      post(this.apiUrl, JSON.stringify(params), options).
      toPromise().
      then(response => response.json()).
      catch(this.handleError);
  }

  update(model: TTest): Promise<any> {
    if (!model.id) {
      throw new Error("model has no id");
    }

    let params = { model: model };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.apiUrl}/${model.id}`;
    let options = new RequestOptions({ headers: headers });
    return this.http.
      put(url, JSON.stringify(params), options).
      toPromise().
      then(response => response.json()).
      catch(this.handleError);
  }

  getPlot(model: TTest, globalPlotOptions: GlobalPlotOptions): Promise<Blob> {
    if (!model.id) {
      throw new Error("model has no id");
    }

    let params = { plotOptions: globalPlotOptions };

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.apiUrl}/${model.id}/plot`;
    let options = new RequestOptions({
      headers: headers,
      responseType: ResponseContentType.Blob
    });

    return this.http.
      post(url, JSON.stringify(params), options).
      toPromise().
      then(response => {
        return response.blob();
      }).
      catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
