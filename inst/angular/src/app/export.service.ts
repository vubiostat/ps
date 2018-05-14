import { Injectable } from '@angular/core';
import {
  Headers,
  RequestOptions,
  Http,
  ResponseContentType
} from '@angular/http';



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

  constructor(private http: Http) { }

  formats(): Promise<FormatsResponse> {
    let url = `${this.apiUrl}/formats`;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.
      get(url, options).
      toPromise().
      then(response => response.json() as FormatsResponse).
      catch(this.handleError);
  }

  plots(format: string, plots: PlotInfo[]): Promise<PlotsResponse> {
    let url = `${this.apiUrl}/plots`;
    let params: any = { format: format, plots: plots };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.
      post(url, JSON.stringify(params), options).
      toPromise().
      then(response => response.json() as PlotsResponse).
      catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
