import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators/map';

@Injectable({ providedIn: 'root' })
export class CartrackerService {
    constructor(private http: HttpClient) { }

    createTracker(): Observable<any> {
      const payload = new HttpParams();
      return this.http.post<any>('http://localhost:8080/deploy/v1/registration/tracker',null)
    }
}
