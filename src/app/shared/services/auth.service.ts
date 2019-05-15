import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<String>;
  public currentUser: Observable<String>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<String>(localStorage.getItem('currentUser'));
    console.log(this.currentUserSubject);
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): String {
    return this.currentUserSubject.value;
  }

  public isLoggedIn(): boolean {
    return this.currentUserValue != null && this.currentUserValue != undefined;
  }

  login(username: string, password: string) {
    console.log(+ password)
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    return this.http.post<any>('/governmentAdmin/deploy/v1/auth/login',
      body.toString(), {
        headers,
        observe: 'response'
      }
    ).pipe(map(token => {
      // login successful if there's a jwt token in the response
      if (token.headers.get('Authorization')) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        // localStorage.setItem('currentUser', JSON.stringify(token.headers.get('Authorization')));
        // this.user = JSON.stringify

        // this.currentUserSubject.value = JSON.stringify(token.headers.get('Authorization'));
        localStorage.setItem('currentUser', token.headers.get('Authorization'));

        // this.currentUser.token = token.headers.get('Authorization');
        this.currentUserSubject.next(localStorage.getItem('currentUser'));
      }
      return token;
    }));
  }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
