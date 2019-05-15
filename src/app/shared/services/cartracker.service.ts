import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators/map';
import { Tracker } from '../models/tracker.model';

@Injectable({ providedIn: 'root' })
export class CartrackerService {
    constructor(private http: HttpClient) { }

    createTracker(): Observable<any> {
      const payload = new HttpParams();
      return this.http.post<any>('movementRegistration/deploy/v1/registration/tracker', { })
    }

    async getAll(): Promise<Tracker[]> {
      const url = 'movementRegistration/deploy/v1/registration/trackers'
      return await this.http.get<Tracker[]>(url).toPromise();
    }

    async linkTrackerToVehicle(trackerId: number, vehicleId: number): Promise<boolean> {
      const url = `movementRegistration/deploy/v1/registration/vehicle/${vehicleId}/tracker/${trackerId}`;
      await this.http.post<void>(url, { }).toPromise();

      return true;
    }
}
