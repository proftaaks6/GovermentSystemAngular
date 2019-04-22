import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
    private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newUrl = environment.base_url;
    newUrl += request.url;

    request = request.clone({
      url: newUrl,
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    });

    return next.handle(request).pipe(tap(event => {
        if (event instanceof HttpResponse) {
          // Nothing to do with normal response
        }
    }, err => {
      console.error(err);
      if (err.status === 401) {
          // auto logout if 401 response returned from api
          this.authService.logout();
      }
    }));
  }
}