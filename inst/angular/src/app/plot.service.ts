import { Injectable } from '@angular/core';
import {
  Headers,
  RequestOptions,
  Http,
  ResponseContentType
} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { TTest } from './t-test';

@Injectable()
export class PlotService {
  private plotUrl = "http://localhost:7788"

  constructor(private http: Http) { }

  getPlot(model: TTest, width: number, height: number): Promise<Blob> {
    let params: any = Object.assign({}, model);
    params.width = width;
    params.height = height;

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({
      headers: headers,
      responseType: ResponseContentType.Blob
    });

    return this.http.
      post(this.plotUrl, JSON.stringify(params), options).
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
