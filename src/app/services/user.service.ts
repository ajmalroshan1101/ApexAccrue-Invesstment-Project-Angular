import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignupPost } from '../models/signupform';
import { Observable } from 'rxjs';
import { LoginPOst } from '../models/loginpost';

@Injectable()
export class UserService {
  baseUrl = 'http://localhost:8500';
  constructor(private Http: HttpClient) {}

  //This request is send the otp entered in the otp component to verify in the backend
  OTPVerification(otpsend: number, phone: number): Observable<any> {
    const endpoint = `${this.baseUrl}/User/verifyotp`;

    return this.Http.post<number>(endpoint, { otp: otpsend, Phone: phone });
  }

  //This request is to send the signup data(detalis) to backend
  SignupPost(PostData: SignupPost): Observable<any> {

    return this.Http.post<SignupPost>(`${this.baseUrl}/User/Signup`, PostData);
  }

  //This request is to find the user when each letter is entered
  loginFindUser(username: string): Observable<any> {
    return this.Http.post<string>(`${this.baseUrl}/user/finduser`, {
      username,
    });
  }

  loginFindUserandPassword(
    username: string,
    password: string
  ): Observable<any> {
    return this.Http.post<string>(`${this.baseUrl}/user/finduserandpassword`, {
      username,
      password,
    });
  }

  loginpost(data: LoginPOst): Observable<any> {
    return this.Http.post<string>(`${this.baseUrl}/user/loginpost`, { data });
  }
}
