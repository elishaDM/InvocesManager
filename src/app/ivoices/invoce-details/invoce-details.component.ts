import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../../_models/Invoice';
import { InvoiceService } from '../../_services/invoice.service';

@Component({
  selector: 'app-invoce-details',
  templateUrl: './invoce-details.component.html',
  styleUrls: ['./invoce-details.component.css']
})
export class InvoceDetailsComponent implements OnInit {
  invoice: Invoice;

  constructor(private invocesService: InvoiceService, private route: ActivatedRoute) {
    this.invoice = this.route.snapshot.data['invoice'];
  }

  ngOnInit(): void {
    this.invoice = this.invocesService.currentInvoice;
    console.dir(this.invoice);
  }

  onEdit() {

  }
}
