import { createAction, props } from '@ngrx/store';
import { Chart } from '../../data/types';

export const loadCharts = createAction('[Chart] Load Charts');
export const loadChartsSuccess = createAction(
  '[Chart] Load Charts Success',
  props<{ charts: Chart[] }>()
);
export const updateChart = createAction(
  '[Chart] Update Chart',
  props<{ chart: Chart }>()
);
