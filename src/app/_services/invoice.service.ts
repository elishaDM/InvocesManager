import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Invoice } from '../_models/Invoice';
import { Page } from '../_models/page';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private _invoices: Invoice[] = [];
  public totalInvoices? = 0;
  public CurrentInvoicesSubject: BehaviorSubject<Invoice[]>;
  currentInvoice: Invoice = new Invoice();

  constructor(private http: HttpClient) {
    this.CurrentInvoicesSubject = new BehaviorSubject<Invoice[]>([]);
    this.GetInvoicesPage();
  }

  GetInvoicesPage(
    sortColumn: string = 'InvoiceNumber',
    sortDirection: string = 'desc',
    pageIndex = 0, pageSize = 5): Observable<Invoice[]> {
    
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams()
        .set('sortColumn', sortColumn)
        .set('sortDirection', sortDirection)
        .set('pageIndex', pageIndex)
        .set('pageSize', pageSize)
    };
    
    //const httpParams = new HttpParams({ fromObject: { ...page } });
    return this.http.get<Invoice[]>(`${environment.apiUrl}/invoices/invoices`,
      httpOptions)
      .pipe(
        //instead additional property that makes returned obejct too complicated, I put the total count
        //in the first item of returned invoices- we need it for paginator
        tap(x => {
          this.CurrentInvoicesSubject.next(x);
          this.totalInvoices = x[0]?.total;
        }),
      );

  }

  public get CurrentInvoices(): Invoice[] {
    return this.CurrentInvoicesSubject.value;
  }

}
