import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ClientUser } from "../models/clientUser.model";

import {Region} from "../../models/region.model";
import { environment } from 'src/environments/environment';
import {toPromise} from "rxjs-compat/operator/toPromise";

@Injectable({ providedIn: 'root' })
export class RegionService {
  constructor(private http: HttpClient) { }

  async saveRegions(regions: Region[]): Promise<Region[]> {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    return await this.http.post<Region[]>(environment.invoiceSystemUrl + 'region', regions, options).toPromise();
  }

  async getRegions(): Promise<Region[]> {
    return await this.http.get<Region[]>(environment.invoiceSystemUrl + 'region').toPromise();
  }

  async deleteRegion(regionId: number): Promise<any>{
    return await this.http.delete(environment.invoiceSystemUrl + 'region/' + regionId).toPromise();
  }
}
