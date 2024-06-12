import { createAction, props } from '@ngrx/store';

export const getCustomers = createAction('[Customer] Get Customers');

export const getCustomersSuccess = createAction(
  '[Customer] Get Customers Success',
  props<{ response: any }>(),
);

export const getCustomer = createAction(
  '[Customer] Get Customer',
  props<{ customerId: string }>(),
);

export const getCustomerSuccess = createAction(
  '[Customer] Get Customer Success',
  props<{ response: any }>(),
);
