import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../environments/environment';

export interface PlotInfo {
  name: string;
  width: number;
  height: number;
  svg: string;
}

export interface FormatsResponse {
  formats: string[];
}

export interface PlotsResponse {
  data: string;
  filename: string;
}

@Injectable()
export class ExportService {
  private apiUrl = `${environment.apiUrl}/export`;

  constructor(private http: HttpClient) { }

  formats(): Observable<FormatsResponse> {
    let url = `${this.apiUrl}/formats`;
    let requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get<FormatsResponse>(url, requestOptions).
      pipe(catchError(this.handleError));
  }

  plots(format: string, plots: PlotInfo[]): Observable<PlotsResponse> {
    let url = `${this.apiUrl}/plots`;
    let params: any = { format: format, plots: plots };
    let requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.
      post<PlotsResponse>(url, params, requestOptions).
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
