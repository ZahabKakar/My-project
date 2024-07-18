import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../ui/card/card.component';
import { Store } from '@ngrx/store';
import { selectAllCharts } from '../../state/selectors/chart.selectors';
import { loadCharts } from '../../state/actions/chart.actions';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  charts$ = this.store.select(selectAllCharts);
  localStorageKey = 'chartData';

  constructor(private store: Store) {}

  ngOnInit() {
    const savedData = localStorage.getItem(this.localStorageKey);
    if (savedData) {
      const charts = JSON.parse(savedData);
      console.log(charts);
      // @ts-ignore
      this.store.dispatch(loadCharts({ charts }));
    }
  }
}
