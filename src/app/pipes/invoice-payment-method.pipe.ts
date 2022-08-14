import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invoicePaymentMethod'
})
export class InvoicePaymentMethodPipe implements PipeTransform {
  methodes: string[] = ['', 'Credit card;', 'Debit card;', 'Electronic check'];
  transform(method: number, ...args: unknown[]): unknown {
    return this.methodes[method];
  }

}
