import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ChartState } from '../reducers/chart.reducer';

export const selectChartState = createFeatureSelector<ChartState>('charts');

export const selectAllCharts = createSelector(
  selectChartState,
  (state) => state.charts
);
