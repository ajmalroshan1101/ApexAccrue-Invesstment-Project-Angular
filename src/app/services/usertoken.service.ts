import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsertokenService {
  public tokenkey!: string;

  constructor() {}

  //settoken is to set the token from the 'token' string
  setToken(token: string) {
    localStorage.setItem('token', token);
    console.log('service token');

    this.tokenkey = token;

    console.log(this.tokenkey);
  }

  //This function is to check weather the token is there ro not
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  gettoken(): string | null {
    return localStorage.getItem('token');
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  //This function is for store the user type while the user enter into the homepage
  storeuser(type: string) {
    console.log(type);
    console.log('type of token userrrrr');

    localStorage.setItem('usertype', type);
  }

  //This function is for getting the stored type of the user
  getuser(): string | null {
    return localStorage.getItem('usertype');
  }

  //This function is to delete the variable stored in localstorage
  removeusertype(): void {
    localStorage.removeItem('usertype');
  }
}
