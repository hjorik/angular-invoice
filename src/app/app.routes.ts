import { Routes } from '@angular/router';
import { CustomerDetailComponent } from './features/customer-detail/customer-detail.component';

export const routes: Routes = [
  { path: ':customerId', component: CustomerDetailComponent },
];
