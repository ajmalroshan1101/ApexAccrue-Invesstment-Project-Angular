import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CompanyForm } from "../models/companysignup";
import { Observable } from "rxjs";

@Injectable()

export class SharedService {

    baseUrl = 'http://localhost:8500';

    constructor(private HTTP :HttpClient){

    }

    companysignup(data:CompanyForm):Observable<any>{

        console.log(data);
        
        return this.HTTP.post<CompanyForm>(`${this.baseUrl}/company/signup`,data);
    }
}