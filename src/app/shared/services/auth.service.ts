import { Injectable } from '@angular/core';

declare const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;

  constructor() {
    this.token = localStorage.getItem(TOKEN_KEY);
  }

  public saveUserDetails(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return this.token;
  }

  public isAuthenticated(): boolean {
    return this.token != null && this.token != undefined;
  }

  public logout(): void {
    localStorage.clear();
    this.token = null;
  }
}
