// @ts-nocheck

import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from '../../../data/types';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { Store } from '@ngrx/store';
import { selectRangeDates } from '../../../state/selectors/date-range.selectors';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, HighchartsChartModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() item!: Chart;

  Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;
  rangeDates: Date[] | null = null;

  constructor(private store: Store) {
    this.store.select(selectRangeDates).subscribe((rangeDates) => {
      this.rangeDates = rangeDates;
      this.setChartOptions(); // Update chart options when date range changes
    });
  }

  ngOnInit() {
    this.setChartOptions();
  }

  setChartOptions() {
    let filteredData = this.item.data;

    if (this.rangeDates) {
      filteredData = this.item.data.filter(
        (d) =>
          new Date(d.date) >= this.rangeDates[0] &&
          new Date(d.date) <= this.rangeDates[1]
      );
    }

    switch (this.item.type) {
      case 'line':
        this.chartOptions = {
          chart: { type: 'line' },
          title: { text: '' },
          xAxis: {
            categories: filteredData.map((d) =>
              new Date(d.date).getFullYear().toString()
            ),
          },
          yAxis: {
            title: { text: '' },
          },
          series: [
            {
              type: 'line',
              name: this.item.name,
              data: filteredData.map((d) => d.value),
            },
          ],
        };
        break;
      case 'bar':
        this.chartOptions = {
          chart: { type: 'bar' },
          title: { text: '' },
          xAxis: {
            categories: filteredData.map((d) =>
              new Date(d.date).getFullYear().toString()
            ),
            title: { text: '' },
          },
          yAxis: {
            title: { text: '' },
          },
          series: [
            {
              type: 'bar',
              name: this.item.name,
              data: filteredData.map((d) => d.value),
            },
          ],
        };
        break;
      case 'spline':
        this.chartOptions = {
          chart: { type: 'spline' },
          title: { text: '' },
          xAxis: {
            categories: filteredData.map((d) =>
              new Date(d.date).getFullYear().toString()
            ),
            title: { text: 'Year' },
          },
          yAxis: {
            title: { text: '' },
          },
          series: [
            {
              type: 'spline',
              name: this.item.name,
              data: filteredData.map((d) => d.value),
            },
          ],
        };
        break;
      case 'area':
        this.chartOptions = {
          chart: { type: 'area' },
          title: { text: '' },
          xAxis: {
            categories: Array.from(
              new Set(
                filteredData.map((d) =>
                  new Date(d.date).getFullYear().toString()
                )
              )
            ),
            title: { text: 'Year' },
          },
          yAxis: {
            title: { text: '' },
          },
          series: [
            {
              type: 'area',
              name: 'Import',
              data: filteredData
                .filter((d) => d.category === 'Import')
                .map((d) => d.value),
            },
            {
              type: 'area',
              name: 'Export',
              data: filteredData
                .filter((d) => d.category === 'Export')
                .map((d) => d.value),
            },
          ],
        };
        break;
      case 'pie':
        this.chartOptions = {
          chart: { type: 'pie' },
          title: { text: '' },
          series: [
            {
              type: 'pie',
              name: 'Energy Source',
              data: this.item.data.map((d) => ({ name: d.name, y: d.value })),
            },
          ],
        };
        break;
      default:
        this.chartOptions = {};
        break;
    }
  }
}
