import {environment} from "../../../environments/environment";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Vehicle } from 'src/app/models/vehicle.model';

@Injectable({providedIn: 'root'})
export class VehicleService {

  constructor(private http: HttpClient){}

  async getVehicles(): Promise<Vehicle[]> {
    const resp = await this.http.get<Vehicle[]>('localhost:movementRegistration/deploy/v1/registration/exi').toPromise();
    return resp;
  }

  async linkUserToVehicle(userId: number, vehicleChassis: string): Promise<boolean> {
    const url = `userSystem/deploy/v1/usersystem/${userId}/car/${vehicleChassis}`;

    return await this.http.post<boolean>(url, { }).toPromise();
  }
}
