import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesListComponent } from './ivoices/invoices-list/invoices-list.component';
import { RouterModule, Routes } from '@angular/router';
import { InvoceDetailsComponent } from './ivoices/invoce-details/invoce-details.component';

const routes: Routes = [
  { path: '', component: InvoicesListComponent },
  { path: 'invoice-details', component: InvoceDetailsComponent },
  { path: 'invoices', component: InvoicesListComponent  },

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
