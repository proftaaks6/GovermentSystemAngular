import { Component, OnInit, Input, Output } from '@angular/core';
import { Invoice } from 'src/app/shared/models/invoice.model';
import { InvoiceService } from 'src/app/shared/services/invoice.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  @Input()
  invoices: Invoice[]; 
  @Input()
  chassisNumbers: string[];
  success: string;

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
  }

  async regenerate(invoiceId: number) {
    let newInvoice = await this.invoiceService.regenerate(invoiceId);
    for (let i = 0; i < this.invoices.length; i++) {
      if (this.invoices[i].id == invoiceId) {
        this.invoices[i] = newInvoice;
        break;
      }
    }
  }

  async generateInvoices() {
    try {
      await this.invoiceService.generateForUser(this.chassisNumbers);
      this.success = "User marked for generation - invoices will be generated within 30 seconds";
      setTimeout(() => {
        this.success = undefined;
      }, 5000);
    } catch {
    }
 
  }

}
