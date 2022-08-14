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

  constructor(private http: HttpClient) {
    this.CurrentInvoicesSubject = new BehaviorSubject<Invoice[]>([]);
    this.GetInvoicesPage();
  }

  GetInvoicesPage(
    sortColumn: string = 'InvoiceNumber',
    sortDirection: string = 'desc',
    pageIndex = 0, pageSize = 5): Observable<Invoice[]> {
    //let size: any = page?.size;
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
        tap(x => this.totalInvoices = x[0]?.total),
      //  map(x => { return <Invoice[]>x.Invoices })
      );

  }

  public get CurrentInvoices(): Invoice[] {
    return this.CurrentInvoicesSubject.value;
  }
}
