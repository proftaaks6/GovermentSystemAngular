import {environment} from "../../../environments/environment";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Vehicle } from 'src/app/shared/models/vehicle.model';
import { LocationPoint } from 'src/app/shared/models/locationPoint.model';
import {JsonVehicle} from "../models/jsonvehicle.model";

@Injectable({providedIn: 'root'})
export class VehicleService {

  constructor(private http: HttpClient){}

  async getVehicles(): Promise<Vehicle[]> {
    const resp = await this.http.get<Vehicle[]>(environment.movementRegistrationUrl + 'registration/vehicles').toPromise();
    return resp;
  }

  async addVehicle(vehicle: JsonVehicle) {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    await this.http.post<boolean>(environment.movementRegistrationUrl + 'registration/vehicle', JSON.stringify(vehicle), options)
      .toPromise()
      .catch(() => { return false });
    return true;
  }

  async linkUserToVehicle(userId: number, vehicleChassis: string): Promise<boolean> {
    const url = environment.userSystemUrl + `usersystem/${userId}/car/${vehicleChassis}`;

    await this.http.post<boolean>(url, { }).toPromise();

    return true;
  }

  async getLocationPointsOfTracker(id: number): Promise<LocationPoint[]> {
    const url = environment.movementRegistrationUrl + `registration/tracker/${id}/points`;

    return await this.http.get<LocationPoint[]>(url).toPromise();
  }

  async getLocationPointsOfVehicle(id: number, from: Date, to: Date): Promise<LocationPoint[]> {
    const url = environment.movementRegistrationUrl + `registration/vehicle/${id}/points/from/${from.valueOf()}/to/${to.valueOf()}`;

    console.log(url);

    return await this.http.get<LocationPoint[]>(url).toPromise();
  }
}
