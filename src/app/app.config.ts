import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';
import { dateRangeReducer } from '../state/reducers/date-range.reducer';
import { chartReducer } from '../state/reducers/chart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({ dateRange: dateRangeReducer, charts: chartReducer }),
    provideAnimationsAsync(),
    provideRouter(routes),
  ],
};
