import { ActionReducerMap } from '@ngrx/store';
import * as fromCustomers from '../../shared/store/customer/customer.reducer';

export interface AppState {
  customers: fromCustomers.CustomerState;
}

export const appReducer: ActionReducerMap<AppState> = {
  customers: fromCustomers.customerReducer,
};
