import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignupPost } from '../Interfaces/signupform';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  
  baseUrl = 'http://localhost:8500';
  constructor(private Http: HttpClient) {}

  OTPVerification(otpsend:number,phone:number):Observable<any>{

     const endpoint = `${this.baseUrl}/User/verifyotp`;

     return this.Http.post<number>(endpoint,{otp:otpsend,Phone:phone});
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
