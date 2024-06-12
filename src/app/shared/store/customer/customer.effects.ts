import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getCustomer,
  getCustomers,
  getCustomersSuccess,
  getCustomerSuccess,
} from './customer.actions';
import { map, switchMap } from 'rxjs';

import { ApiClient } from '../../apiClient';

@Injectable()
export class CustomerEffects {
  constructor(
    private actions$: Actions,
    private apiClient: ApiClient,
  ) {}

  getCustomers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCustomers),
      switchMap(() =>
        this.apiClient.getCustomers().pipe(
          map((response) => {
            console.log('getCustomersEffect');
            return getCustomersSuccess({ response });
          }),
        ),
      ),
    ),
  );

  getCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCustomer),
      switchMap(({ customerId }) =>
        this.apiClient.getCustomer(customerId).pipe(
          map((response) => {
            return getCustomerSuccess({ response });
          }),
        ),
      ),
    ),
  );
}
