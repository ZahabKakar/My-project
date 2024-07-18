import { createAction, props } from '@ngrx/store';

export const setDateRange = createAction(
  '[Date Range] Set Date Range',
  props<{ rangeDates: Date[] }>()
);
