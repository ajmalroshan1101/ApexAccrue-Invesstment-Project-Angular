// import { Injectable } from '@angular/core';
// import { jwtDecode } from 'jwt-decode';



// @Injectable({
//   providedIn: 'root'
// })
// export class TokenInterceptorService {

//   constructor() { }

// }
// token-interceptor.service.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsertokenService } from './usertoken.service';


@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private usertoken:UsertokenService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Check if the user is authenticated (you may have your own logic here)
    if (this.usertoken.isAuthenticated()) {

      // Get the user's token from your UserService
      const userToken = this.usertoken.gettoken();

      // Clone the request and add the token to the headers
      const modifiedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      // Pass the modified request to the next handler in the chain
      return next.handle(modifiedRequest);
    }

    // If not authenticated, proceed with the original request
    return next.handle(request);
  }
}
