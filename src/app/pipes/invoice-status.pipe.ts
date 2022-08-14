import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invoiceStatus'
})
export class InvoiceStatusPipe implements PipeTransform {
  statuses: string[] = ['', 'New', 'Paid', 'Canceled'];
  transform(status: number, ...args: unknown[]): unknown {
    return this.statuses[status];
  }

}
