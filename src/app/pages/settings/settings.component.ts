//@ts-nocheck

import { Component, OnInit } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { selectAllCharts } from '../../../state/selectors/chart.selectors';
import { Chart } from '../../../data/types';
import { loadCharts, updateChart } from '../../../state/actions/chart.actions';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, TabViewModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  charts$ = this.store.select(selectAllCharts);
  activeIndex: number = 0;
  newEntries: any[] = [{}];
  newChart: any = {
    id: Date.now(),
    name: '',
    type: 'line',
    footer: '',
    data: [{}],
  };
  localStorageKey = 'chartData';
  selectedChart: any = null;
  isEditModalOpen: boolean = false;

  constructor(private store: Store) {}

  ngOnInit() {
    const savedData = localStorage.getItem(this.localStorageKey);
    if (savedData) {
      const charts = JSON.parse(savedData);
      this.store.dispatch(loadCharts({ charts }));
    }
  }

  getKeys(dataPoint: any): string[] {
    return Object.keys(dataPoint);
  }

  onTabChange(event: any) {
    this.activeIndex = event.index;
  }

  addInput() {
    this.newEntries = [...this.newEntries, {}];
  }

  addDataPoint() {
    this.newChart.data.push({});
  }

  saveAllData(chart: Chart) {
    const updatedData = [...chart.data];
    this.newEntries.forEach((newEntry) => {
      Object.keys(newEntry).forEach((key) => {
        if (key === 'date') {
          newEntry[key] = new Date(newEntry[key]);
        } else if (key === 'name') {
          newEntry[key] = String(newEntry[key]);
        } else if (key === 'category') {
          newEntry[key] = String(newEntry[key]);
        } else {
          newEntry[key] = Number(newEntry[key]);
        }
      });
      updatedData.push({ ...newEntry });
    });
    const updatedChart = { ...chart, data: updatedData };
    this.store.dispatch(updateChart({ chart: updatedChart }));
    this.saveToLocalStorage();
    this.newEntries = [{}];
  }

  saveNewChart() {
    this.newChart.data = this.newChart.data.map((dataPoint: any) => ({
      ...dataPoint,
      date: new Date(dataPoint.date),
      value: Number(dataPoint.value),
    }));
    this.charts$
      .subscribe((charts) => {
        const updatedCharts = [...charts, { ...this.newChart }];
        this.store.dispatch(loadCharts({ charts: updatedCharts }));
        localStorage.setItem(
          this.localStorageKey,
          JSON.stringify(updatedCharts)
        );
        this.newChart = {
          id: Date.now(),
          name: '',
          type: 'line',
          footer: '',
          data: [{}],
        };
      })
      .unsubscribe();

    window.location.reload();
  }

  deleteChart(chartId: number) {
    this.charts$
      .subscribe((charts) => {
        const updatedCharts = charts.filter((chart) => chart.id !== chartId);
        this.store.dispatch(loadCharts({ charts: updatedCharts }));
        localStorage.setItem(
          this.localStorageKey,
          JSON.stringify(updatedCharts)
        );
      })
      .unsubscribe();

    window.location.reload();
  }

  saveToLocalStorage() {
    this.charts$
      .subscribe((charts) => {
        localStorage.setItem(this.localStorageKey, JSON.stringify(charts));
      })
      .unsubscribe();
  }

  editChart(chart: any) {
    this.selectedChart = { ...chart };
    this.isEditModalOpen = true;
  }

  saveUpdatedChart() {
    this.store.dispatch(updateChart({ chart: this.selectedChart }));
    this.saveToLocalStorage();
    this.isEditModalOpen = false;
  }

  closeModal() {
    this.isEditModalOpen = false;
  }
}
