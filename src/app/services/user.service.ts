import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignupPost } from '../Interfaces/signupform';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  Api='http://localhost/8500'
  baseUrl = 'http://localhost:8500';
  constructor(private Http: HttpClient) {}

  OTPVerification(PostData:SignupPost):Observable<any>{

     const endpoint = `${this.Api}/User/verifyotp`;

     const headers = new HttpHeaders({'Content-Type':'application/json'});  

     return this.Http.post<SignupPost>(endpoint,PostData,{headers});
  }

  SignupPost(PostData:SignupPost):Observable<any>{

    console.log('service')
    console.log(PostData);

    return this.Http.post<SignupPost>(
      `${this.baseUrl}/User/Signup`,
      PostData
    );
  }
}
