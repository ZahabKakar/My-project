import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DateRangeState } from '../reducers/date-range.reducer';

export const selectDateRangeState =
  createFeatureSelector<DateRangeState>('dateRange');

export const selectRangeDates = createSelector(
  selectDateRangeState,
  (state: DateRangeState) => state.rangeDates
);
