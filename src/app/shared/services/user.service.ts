import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators/map';
import { ClientUser } from '../models/clientUser';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    async saveNewUser(name: string, email: string): Promise<ClientUser> {
      let body = {
        email,
        name
      }

      try {
        return await this.http.post<ClientUser>('government/user', body).toPromise();
      } catch (e) {
        throw e;
      }
    }
}
