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
export class PlotService {
  private plotUrl = `${environment.apiUrl}/plot`;

  constructor(private http: Http) { }

  getPlot(model: TTest, globalPlotOptions: GlobalPlotOptions): Promise<Blob> {
    let params = {
      model: model,
      plotOptions: globalPlotOptions
    };

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
