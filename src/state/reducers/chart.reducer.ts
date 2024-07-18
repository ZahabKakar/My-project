import { createReducer, on } from '@ngrx/store';
import { loadChartsSuccess, updateChart } from '../actions/chart.actions';
import { Chart } from '../../data/types';

export interface ChartState {
  charts: Chart[];
}

export const initialState: ChartState = {
  charts: [],
};

const _chartReducer = createReducer(
  initialState,
  on(loadChartsSuccess, (state, { charts }) => ({ ...state, charts })),
  on(updateChart, (state, { chart }) => ({
    ...state,
    charts: state.charts.map((c) => (c.id === chart.id ? chart : c)),
  }))
);

export function chartReducer(state: any, action: any) {
  return _chartReducer(state, action);
}
