import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class DataApiService {
  constructor(private http: HttpClient) {
  }

  addOrUpdate(url, body, method = 'post', headers?: HttpHeaders) {
    if (url && body && method) {
      return this.http[method](url, body, { headers: headers ? headers : {} }).map((res: any) =>  res );
    }
  }

  delete(url, headers?: HttpHeaders){
    if (url) {
      return this.http.delete(url, { headers: headers ? headers : {} }).map((res: any) =>  res );
    }
  }

  getData(url, headers?: HttpHeaders) {
    if (url) {
      return this.http.get(url, { headers: headers ? headers : {} }).map((res: any) =>  res );
    }
  }

}
