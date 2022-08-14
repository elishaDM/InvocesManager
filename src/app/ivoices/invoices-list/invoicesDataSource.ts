import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { catchError, of } from "rxjs";
import { finalize } from "rxjs";
import { BehaviorSubject, Observable } from "rxjs";
import { Invoice } from "../../_models/Invoice";
import { InvoiceService } from "../../_services/invoice.service";

export class InvoicesDataSource implements DataSource<Invoice> {

  private invoicesSubject = new BehaviorSubject<Invoice[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public totalSubject = new BehaviorSubject<number>(0);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private invoicesService: InvoiceService) { }

  connect(collectionViewer: CollectionViewer): Observable<Invoice[]> {
    return this.invoicesSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.invoicesSubject.complete();
    this.loadingSubject.complete();
  }

  getInvoices(sortColumn: string = 'InvoiceNumber',
    sortDirection: string = 'desc',
    pageIndex = 0,
    pageSize = 5) {

    this.loadingSubject.next(true);

    //+1 - because of the difference between Mat paginator and PageList at BackSide that starts from 0
    const getInvoicesPageSubscription =  this.invoicesService.GetInvoicesPage(sortColumn, sortDirection, pageIndex+1 , pageSize)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((invoices: Invoice[]) => {
        this.totalSubject.next((invoices[0]?.total) ? invoices[0]?.total : 0);
        console.dir(invoices);

        this.invoicesSubject.next(invoices);
        getInvoicesPageSubscription.unsubscribe();
      });
  }
}
