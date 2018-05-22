import { Injectable } from '@angular/core';
import {
  Headers,
  RequestOptions,
  Http,
  ResponseContentType
} from '@angular/http';

import { environment } from '../../environments/environment';
import { Range } from '../range';
import { TTest } from './t-test';

export interface PlotDataRanges {
  nRange?: Range;
  powerRange?: Range;
  deltaRange?: Range;
  pSpaceRange?: Range;
};

@Injectable()
export class TTestService {
  private apiUrl = `${environment.apiUrl}/ttests`;

  constructor(private http: Http) { }

  calculate(model: TTest): Promise<any> {
    let url = `${this.apiUrl}/calc`;
    let params = model.params();

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let requestOptions = new RequestOptions({ headers: headers });
    return this.http.
      post(url, JSON.stringify(params), requestOptions).
      toPromise().
      then(response => response.json()).
      catch(this.handleError);
  }

  plotData(models: TTest[], ranges: PlotDataRanges, pointsPerPlot?: number): Promise<any> {
    let url = `${this.apiUrl}/plotData`;
    let params: any = {
      models: models.map(m => m.params()),
      ranges: ranges
    };
    if (typeof(pointsPerPlot) === 'number') {
      params.points = pointsPerPlot;
    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let requestOptions = new RequestOptions({ headers: headers });
    return this.http.
      post(url, JSON.stringify(params), requestOptions).
      toPromise().
      then(response => response.json()).
      catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
