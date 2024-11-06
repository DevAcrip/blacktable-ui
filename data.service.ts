import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Modelo } from './modelo';

@Injectable({
  providedIn: 'root'
})

export abstract class DataService <T extends Modelo<T>> {
  constructor(
    private httpClient: HttpClient,
    private tConstructor: { new (m: Partial<T>, ...args: unknown[]): T },
    protected apiUrl: string
  ) {}

  public create(resource: Partial<T> & { toJson: () => T }): Observable<T> {
    console.log("create " +this.apiUrl);

    return this.httpClient
      .post<T>(`${this.apiUrl}`, resource.toJson())
      .pipe(tap(data => console.log(JSON.stringify(data))),
                catchError(this.handleError)
        );
        //map((result) => new this.tConstructor(result))
  }

  public get(): Observable<T[]> {
    return this.httpClient
      .get<T[]>(`${this.apiUrl}`)
      .pipe(tap(data => console.log(JSON.stringify(data))),
          catchError(this.handleError));
          //map((result) => result.map((i) => new this.tConstructor(i)))
  }

  public getById(Id: number): Observable<T> {
    return this.httpClient
      .get<T>(`${this.apiUrl}/${Id}`)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError));
        // map((result) => new this.tConstructor(result))
  }

  public update(resource: Partial<T> & { toJson: () => T }): Observable<T> {
    return this.httpClient
      .put<T>(`${this.apiUrl}/${resource.Id}`, resource.toJson())
      .pipe(tap(data => console.log(JSON.stringify(data))),
                  catchError(this.handleError));
         // map((result) => new this.tConstructor(result))
  }

  public delete(Id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${Id}`);
  }

  private handleError(err: { error: { message: any; }; status: any; body: { error: any; }; }) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. 
      errorMessage = `Error cliente: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      errorMessage = `Error backend ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
