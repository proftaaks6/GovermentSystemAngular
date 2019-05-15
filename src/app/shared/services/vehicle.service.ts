import {environment} from "../../../environments/environment";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Vehicle } from 'src/app/shared/models/vehicle.model';
import { LocationPoint } from 'src/app/shared/models/locationPoint.model';

@Injectable({providedIn: 'root'})
export class VehicleService {

  constructor(private http: HttpClient){}

  async getVehicles(): Promise<Vehicle[]> {
    const resp = await this.http.get<Vehicle[]>('movementRegistration/deploy/v1/registration/vehicles').toPromise();
    return resp;
  }

  async linkUserToVehicle(userId: number, vehicleChassis: string): Promise<boolean> {
    const url = `userSystem/deploy/v1/usersystem/${userId}/car/${vehicleChassis}`;

    await this.http.post<boolean>(url, { }).toPromise();

    return true;
  }

  async getLocationPointsOfTracker(id: number): Promise<LocationPoint[]> {
    const url = `movementRegistration/deploy/v1/registration/tracker/${id}/points`;

    return await this.http.get<LocationPoint[]>(url).toPromise();
  }

  async getLocationPointsOfVehicle(id: number, from: Date, to: Date): Promise<LocationPoint[]> {
    const url = `movementRegistration/deploy/v1/registration/vehicle/${id}/points/from/${from.valueOf()}/to/${to.valueOf()}`;

    console.log(url);

    return await this.http.get<LocationPoint[]>(url).toPromise();
  }
}
