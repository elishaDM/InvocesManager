import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesListComponent } from './ivoices/invoices-list/invoices-list.component';
import { RouterModule, Routes } from '@angular/router';
import { InvoceDetailsComponent } from './ivoices/invoce-details/invoce-details.component';
import { EditComponent } from './ivoices/edit/edit.component';
import { InvoiceResolver } from './_services/invoice-resolver.server';

const routes: Routes = [
  { path: '', component: InvoicesListComponent },
  { path: 'invoice-details/:id', component: InvoceDetailsComponent },
  { path: 'invoices', component: InvoicesListComponent },
  {
    path: 'invoices/:id/edit', component: EditComponent,
    resolve: { invoice: InvoiceResolver }
  },
  { path: 'add', component: EditComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
