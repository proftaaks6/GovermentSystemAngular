import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators/map';
import { ClientUser } from '../models/clientUser.model';
import { LoginAttempt } from '../models/loginAttempt.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    async saveNewUser(name: string, email: string, address: string, residence: string): Promise<ClientUser> {
      let body = new URLSearchParams();
      body.set('email', email);
      body.set('name', name);
      body.set('address', address);
      body.set('residence', residence);

      let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      };

      return await this.http.post<ClientUser>(environment.userSystemUrl + 'usersystem/userInfo', body.toString(), options).toPromise();
    } 

    async getAll(): Promise<ClientUser[]> {
      console.log(environment.userSystemUrl + 'usersystem/users');
      return await this.http.get<ClientUser[]>(environment.userSystemUrl + 'usersystem/users').toPromise();
    }

    async getUserById(id: number): Promise<ClientUser> {
      return this.http.get<ClientUser>(environment.userSystemUrl + `usersystem/users/${id}`).toPromise();
    }

    async getLoginAttempts(id: number): Promise<LoginAttempt[]> {
      return this.http.get<LoginAttempt[]>(environment.driverApplicationUrl + `driverapplication/${id}`).toPromise();
    }
}
