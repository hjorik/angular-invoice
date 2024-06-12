import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../core/store/app.reducer';
import { Observable, Subscription } from 'rxjs';
import { getCustomer } from '../../shared/store/customer/customer.actions';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  template: `
    <div class="flex h-full w-full">
      <h1>{{ (activeCustomer$ | async)?.name }}</h1>
    </div>
  `,
})
export class CustomerDetailComponent {
  constructor(
    private store: Store<fromApp.AppState>,
    private route: ActivatedRoute,
  ) {}

  activeCustomer$!: Observable<any>;

  routeSubscription = new Subscription();

  ngOnInit() {
    this.loadDataFromRouteParam();
  }

  loadDataFromRouteParam() {
    this.routeSubscription = this.route.params.subscribe((params) => {
      this.store.dispatch(getCustomer({ customerId: params['customerId'] }));
      this.activeCustomer$ = this.store.select(
        (state) => state.customers.activeCustomer,
      );
      /* this.store.dispatch(getBillings({ customerId: params['customerId'] })); */
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
