import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators/map';
import { Tracker } from '../models/tracker.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CartrackerService {
    constructor(private http: HttpClient) { }

    createTracker(): Observable<any> {
      const payload = new HttpParams();
      return this.http.post<any>(environment.movementRegistrationUrl + 'registration/tracker', { })
    }

    async getAll(): Promise<Tracker[]> {
      const url = environment.movementRegistrationUrl + 'registration/trackers'
      return await this.http.get<Tracker[]>(url).toPromise();
    }

    async linkTrackerToVehicle(trackerId: number, vehicleId: number): Promise<boolean> {
      const url = environment.movementRegistrationUrl + `registration/vehicle/${vehicleId}/tracker/${trackerId}`;
      await this.http.post<void>(url, { }).toPromise();

      return true;
    }
}
