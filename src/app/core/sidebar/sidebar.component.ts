import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import { getCustomers } from '../../shared/store/customer/customer.actions';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav
      class="flex flex-col h-full w-64 p-4 gap-1 bg-slate-100 border-r border-slate-200"
    >
      <ul class="flex flex-col gap-1">
        @for (customer of (customers$ | async)?.data; track $index) {
          <li
            class="flex items-center p-3 h-10 w-full bg-slate-50 border rounded-md text-sm font-semibold cursor-pointer hover:bg-slate-300"
            [routerLink]="customer.id"
            routerLinkActive="text-sky-500 bg-sky-100"
          >
            {{ customer.name }}
          </li>
        }
      </ul>
    </nav>
  `,
})
export class SidebarComponent {
  constructor(private store: Store<fromApp.AppState>) {}

  customers$ = this.store.select('customers');

  ngOnInit() {
    this.store.dispatch(getCustomers());
  }
}
