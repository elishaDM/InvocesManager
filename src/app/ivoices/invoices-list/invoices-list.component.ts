import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { merge, mergeWith, tap } from 'rxjs/operators';
import { Invoice } from '../../_models/Invoice';
import { InvoiceService } from '../../_services/invoice.service';
import { InvoicesDataSource } from './invoicesDataSource';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.css']
})
export class InvoicesListComponent implements OnInit, AfterViewInit {
  dataSource!: InvoicesDataSource;
  displayedColumns: string[] = ['createdTime', 'InvoiceNumber', 'Status', 'Amount', 'PaymentMethod'];

  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
  _currentSortColumn: string = 'InvoiceNumber';
  _currentSortDirection: string = 'desc';
  invoicestotalCount = 15;
    pageSize: number = 5;

  constructor(private invoiceService: InvoiceService) {
  }

  ngOnInit(): void {
    this.dataSource = new InvoicesDataSource(this.invoiceService);
    this.dataSource.getInvoices();

  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => this.loadInvoicesPage())
      )
      .subscribe();
    // reset the paginator after sorting
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 1);

    this.sort.sortChange.pipe(mergeWith(this.paginator.page))
      .pipe(
        tap(() => {
          this.loadInvoicesPage()
          console.dir(this.paginator.pageIndex)
        })
      )
      .subscribe();
  }

  sortData(sort: Sort) {
    this._currentSortColumn = sort.active;
    this._currentSortDirection = sort.direction;
  }

  loadInvoicesPage() {
    this.pageSize = this.paginator.pageSize;
    //console.dir(this.sort)
    this.dataSource.getInvoices(
      this._currentSortColumn,
      this._currentSortDirection,
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }

}
