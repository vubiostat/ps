import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Range } from '../range';
import { TTest, TTestAttribs, TTestPlotData } from './t-test';

export interface PlotDataRanges {
  nRange?: Range;
  powerRange?: Range;
  deltaRange?: Range;
  pSpaceRange?: Range;
};

interface PlotDataParams {
  models: TTestAttribs[];
  ranges: PlotDataRanges;
  points?: number;
}

export interface PlotDataResponse {
  data: TTestPlotData[];
  points: number;
};

@Injectable()
export class TTestService {
  private apiUrl = `${environment.apiUrl}/ttests`;

  constructor(private http: HttpClient) { }

  calculate(model: TTest): Observable<TTestAttribs> {
    let url = `${this.apiUrl}/calc`;
    let attribs = model.attribs();

    let requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.
      post<TTestAttribs>(url, attribs, requestOptions).
      pipe(catchError(this.handleError));
  }

  plotData(models: TTest[], ranges: PlotDataRanges, pointsPerPlot?: number): Observable<PlotDataResponse> {
    let url = `${this.apiUrl}/plotData`;
    let params: PlotDataParams = {
      models: models.map(m => m.attribs()),
      ranges: ranges
    };
    if (typeof(pointsPerPlot) === 'number') {
      params.points = pointsPerPlot;
    }

    let requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.
      post<PlotDataResponse>(url, params, requestOptions).
      pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse, caught: any): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was:`, error.error);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
