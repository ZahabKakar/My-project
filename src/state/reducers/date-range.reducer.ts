import { createReducer, on } from '@ngrx/store';
import { setDateRange } from '../actions/date-range.actions';

export interface DateRangeState {
  rangeDates: Date[] | null;
}

export const initialState: DateRangeState = {
  rangeDates: null,
};

export const dateRangeReducer = createReducer(
  initialState,
  on(setDateRange, (state, { rangeDates }) => ({ ...state, rangeDates }))
);
