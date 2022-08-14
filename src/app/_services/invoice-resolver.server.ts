import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Invoice } from '../_models/Invoice';
import { InvoiceService } from './invoice.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceResolver implements Resolve<Invoice>{
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Invoice  {
    return this.invoiceservice.CurrentInvoicesSubject.value[0];
  }

  constructor(private invoiceservice: InvoiceService) { }

}
