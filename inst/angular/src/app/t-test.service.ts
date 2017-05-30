import { Injectable } from '@angular/core';
import {
  Headers,
  RequestOptions,
  Http,
  ResponseContentType
} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from '../environments/environment';
import { TTest, TTestRanges, TTestSet } from './t-test';
import { PlotOptions } from './plot-options';

@Injectable()
export class TTestService {
  private apiUrl = `${environment.apiUrl}/ttests`;
  private stateless = environment.stateless;

  constructor(private http: Http) { }

  create(model: TTest): Promise<any> {
    let url;
    if (this.stateless) {
      url = `${this.apiUrl}/calc`;
    } else {
      url = this.apiUrl;
    }
    let params = { model: model.attributes() };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.
      post(url, JSON.stringify(params), options).
      toPromise().
      then(response => response.json()).
      catch(this.handleError);
  }

  update(model: TTest): Promise<any> {
    if (this.stateless) {
      return this.create(model);
    }

    if (!model.id) {
      throw new Error("model has no id");
    }

    let url = `${this.apiUrl}/${model.id}`;
    let params = { model: model.attributes() };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });
    return this.http.
      put(url, JSON.stringify(params), options).
      toPromise().
      then(response => response.json()).
      catch(this.handleError);
  }

  getPlot(modelSet: TTestSet, plotOptions: PlotOptions): Promise<Blob> {
    let url;
    if (this.stateless) {
      url = `${this.apiUrl}/plot`;
    } else {
      if (!modelSet.model.id) {
        throw new Error("model has no id");
      }
      url = `${this.apiUrl}/${modelSet.model.id}/plot`;
    }

    let params = {
      plotOptions: plotOptions.attributes(),
      ranges: modelSet.ranges.attributes()
    };

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

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
