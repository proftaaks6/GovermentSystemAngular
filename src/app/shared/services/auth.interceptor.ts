import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    // let token = JSON.parse(localStorage.getItem('currentUser'));
    // console.log(token);
    console.log('intercept auth!');
    let token = localStorage.getItem('currentUser');
    console.log(token);
    // console.log(token);
    if (token) {
      request = request.clone({
        setHeaders: {

          Authorization: `${token}`
        }
      });
    }
    // console.log(request);
    return next.handle(request);
  }
}
