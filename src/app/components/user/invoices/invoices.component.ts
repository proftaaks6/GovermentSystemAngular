import { Component, OnInit, Input } from '@angular/core';
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

}
