import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InvoicesListComponent } from './ivoices/invoices-list/invoices-list.component';
import { InvoceDetailsComponent } from './ivoices/invoce-details/invoce-details.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { InvoiceStatusPipe } from './pipes/invoice-status.pipe';
import { InvoicePaymentMethodPipe } from './pipes/invoice-payment-method.pipe';
import { EditComponent } from './ivoices/edit/edit.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    InvoicesListComponent,
    InvoceDetailsComponent,
    InvoiceStatusPipe,
    InvoicePaymentMethodPipe,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatPaginatorModule, 
    MatSortModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
