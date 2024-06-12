import { createReducer, on } from '@ngrx/store';
import { getCustomersSuccess, getCustomerSuccess } from './customer.actions';

export interface CustomerState {
  data: any[];
  activeCustomer: any;
}

export const initialState: CustomerState = {
  data: [],
  activeCustomer: null,
};

export const customerReducer = createReducer(
  initialState,
  on(getCustomersSuccess, (state, { response }) => ({
    ...state,
    data: response,
  })),
  on(getCustomerSuccess, (state, { response }) => ({
    ...state,
    activeCustomer: response.data,
  })),
);
