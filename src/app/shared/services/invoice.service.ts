import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../models/invoice.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  async getForVehicles(ids: number[]): Promise<Invoice[]> {
    return this.http.get<Invoice[]>(environment.invoiceSystemUrl + `invoicesystem/vehicle/${ids.join(',')}`).toPromise();
  }

  async regenerate(id: number): Promise<Invoice> {
    return this.http.get<Invoice>(environment.invoiceSystemUrl + `invoicesystem/regenerate/${id}`).toPromise();
  }
}
