import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../models/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  async getForVehicles(ids: number[]): Promise<Invoice[]> {
    return this.http.get<Invoice[]>(`invoiceSystem/deploy/v1/invoicesystem/vehicle/${ids.join(',')}`).toPromise();
  }

  async regenerate(id: number): Promise<Invoice> {
    return this.http.get<Invoice>(`invoiceSystem/deploy/v1/invoicesystem/regenerate/${id}`).toPromise();
  }
}
