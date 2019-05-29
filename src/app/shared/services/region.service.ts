import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ClientUser } from "../models/clientUser.model";

import {Region} from "../../models/region.model";
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class RegionService {
  constructor(private http: HttpClient) { }

  async setRegions(regions: Region[]): Promise<ClientUser> {
    let body = JSON.stringify(regions);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    return await this.http.post<ClientUser>(environment.invoiceSystemUrl + 'region', body.toString(), options).toPromise();
  }

  async getRegions(): Promise<Region[]> {
    return await this.http.get<Region[]>(environment.invoiceSystemUrl + 'region').toPromise();
  }
}
