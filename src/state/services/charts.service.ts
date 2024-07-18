import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadChartsSuccess } from '../actions/chart.actions';
import charts from '../../data';

@Injectable({
  providedIn: 'root',
})
export class ChartsService {
  constructor(private store: Store) {}
  localStorageKey = 'chartData';

  loadDefaultCharts() {
    const savedData = localStorage.getItem(this.localStorageKey);
    if (savedData) {
      const charts = JSON.parse(savedData);
      this.store.dispatch(loadChartsSuccess({ charts }));
    } else {
      this.store.dispatch(loadChartsSuccess({ charts }));
    }
  }
}
