import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class Companyserivce {
  baseUrl = 'http://localhost:8500';

  constructor(private http: HttpClient) {}

  tokencheck(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/common/checktoken`);
  }

  postplan(data:any):Observable <any>{

    return this.http.post<any>(`${this.baseUrl}/company/createplan`,data)
  }
}
