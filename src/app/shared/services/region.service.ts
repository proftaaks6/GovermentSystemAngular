import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ClientUser } from "../models/clientUser.model";

import {Region} from "../../models/region.model";

@Injectable({ providedIn: 'root' })
export class RegionService {
  constructor(private http: HttpClient) { }

  async setRegions(regions: Region[]): Promise<ClientUser> {
    let body = JSON.stringify(regions);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    return await this.http.post<ClientUser>('governmentAdmin/deploy/v1/region', body.toString(), options).toPromise();
  }
}
