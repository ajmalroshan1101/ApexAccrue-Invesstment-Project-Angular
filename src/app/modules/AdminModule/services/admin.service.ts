import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AdminService {
  baseUrl = 'http://localhost:8500';

  constructor(private HTTP: HttpClient) {}

  getcompanies(): Observable<any[]> {
    return this.HTTP.get<any[]>(`${this.baseUrl}/company/getcompanies`);
  }

  approveCompany(companyId: string): Observable<any> {
    console.log(companyId);
    
    return this.HTTP.post<any>(`${this.baseUrl}/admin/approveCompany`, { companyId });
  }

  rejectCompany(companyId: string): Observable<any> {
    return this.HTTP.post<any>(`${this.baseUrl}/admin/rejectCompany`, { companyId });
  }

  getcompanylist():Observable <any[]>{
    return this.HTTP.get<any[]>(`${this.baseUrl}/company/companylist`);
  }
}


