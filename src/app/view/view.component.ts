import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../layout/hero/hero.component';
import { ChartsComponent } from '../charts/charts.component';
import { RangeDatePickerComponent } from '../ui/range-date-picker/range-date-picker.component';
import { selectAllCharts } from '../../state/selectors/chart.selectors';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { loadCharts } from '../../state/actions/chart.actions';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [
    HeroComponent,
    ChartsComponent,
    RangeDatePickerComponent,
    CommonModule,
  ],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent implements OnInit {
  charts$ = this.store.select(selectAllCharts);
  localStorageKey = 'chartData';

  shouldShowRangeDatePicker = true;

  constructor(private store: Store) {}

  ngOnInit() {
    const savedData = localStorage.getItem(this.localStorageKey);
    if (savedData) {
      const charts = JSON.parse(savedData);
      console.log(charts);
      // @ts-ignore
      this.store.dispatch(loadCharts({ charts }));
    }

    this.charts$.subscribe((charts) => {
      this.shouldShowRangeDatePicker = charts.length > 0;
    });
  }
}
