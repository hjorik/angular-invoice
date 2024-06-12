import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromApp from './core/store/app.reducer';
import { CustomerEffects } from './shared/store/customer/customer.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(fromApp.appReducer),
    provideEffects([CustomerEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
],
};
