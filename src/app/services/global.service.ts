import { Injectable } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';

const serviceUrl: String = 'http://localhost:3000';
@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  remoteDataSource: any;

  constructor() {}

  getData(key: string, route: string) {
    return this.getRemoteDataSource(key, route);
  }
  getRemoteDataSource(key: string, route: string) {
    return (this.remoteDataSource = createStore({
      key: key,
      loadUrl: serviceUrl + route,
    }));
  }


}
