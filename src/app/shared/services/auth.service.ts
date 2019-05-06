import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private TOKEN_KEY = 'token';

  private token: string;

  constructor() {
    this.token = localStorage.getItem(this.TOKEN_KEY);
  }

  public saveUserDetails(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
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
