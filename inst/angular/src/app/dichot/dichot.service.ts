import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Range } from '../range';
import { Output } from '../output';
import { Dichot, DichotMatched, DichotCase, DichotExpressed, DichotAttribs, DichotPlotData } from './dichot';

export interface PlotDataRanges {
  sampleSizeRange?: Range;
  powerRange?: Range;
  detAltRange?: Range;
  //pSpaceRange?: Range;
};

interface PlotDataParams {
  models: DichotAttribs[];
  ranges: PlotDataRanges;
  points?: number;
}

export interface PlotDataResponse {
  data: DichotPlotData[];
  points: number;
};

@Injectable({
  providedIn: 'root'
})
export class DichotService {
  private apiUrl = `${environment.apiUrl}/dichot`;

  constructor(private http: HttpClient) { }

  calculate(model: Dichot): Observable<DichotAttribs> {
    let url = `${this.apiUrl}/calc`;
    let attribs = model.attribs();

    let requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.
      post<DichotAttribs>(url, attribs, requestOptions).
      pipe(
        map(attribs => {
          if (model.output === Output.DetectableAlternative) {
            // FIXME: properly handle upper/lower bounds for det. alt.
            if (model.matched === DichotMatched.Matched) {
              if (Array.isArray(attribs.psi)) {
                attribs.psi = attribs.psi[0];
              }
            } else if (model.matched === DichotMatched.Independent) {
              if (model.expressed === DichotExpressed.TwoProportions) {
                if (Array.isArray(attribs.p1)) {
                  attribs.p1 = attribs.p1[0];
                }
              } else if (model.expressed === DichotExpressed.OddsRatio) {
                if (Array.isArray(attribs.psi)) {
                  attribs.psi = attribs.psi[0];
                }
              } else if (model.expressed === DichotExpressed.RelativeRisk) {
                if (Array.isArray(attribs.r)) {
                  attribs.r = attribs.r[0];
                }
              }
            }
          }
          return attribs;
        }),
        catchError(this.handleError)
      );
  }

  plotData(models: Dichot[], ranges: PlotDataRanges, pointsPerPlot?: number): Observable<PlotDataResponse> {
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
