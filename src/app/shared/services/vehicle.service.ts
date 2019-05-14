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
    const url = `governmentAdmin/deploy/v1/government/linkcar`;
    let body = new URLSearchParams();
    body.set('userId', userId.toString());
    body.set('vehicleChassis', vehicleChassis);
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return await this.http.post<boolean>(url, body.toString(), options).toPromise();
  }
}
