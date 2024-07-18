import { Chart } from './types';

const charts: Chart[] = [
  {
    id: 1,
    name: 'Population Growth',
    footer: 'Population Growth of Finland (in million)',
    dateRange: 'from 2013 to 2023',
    type: 'line',
    data: [
      { value: 5.38, date: new Date('2013-01-01') },
      { value: 5.4, date: new Date('2014-01-01') },
      { value: 5.49, date: new Date('2015-01-01') },
      { value: 5.5, date: new Date('2016-01-01') },
      { value: 5.51, date: new Date('2017-01-01') },
      { value: 5.52, date: new Date('2018-01-01') },
      { value: 5.53, date: new Date('2019-01-01') },
      { value: 5.53, date: new Date('2020-01-01') },
      { value: 5.56, date: new Date('2021-01-01') },
      { value: 5.56, date: new Date('2022-01-01') },
      { value: 5.6, date: new Date('2023-01-01') },
    ],
  },
  {
    id: 2,
    name: 'GDP Growth',
    type: 'bar',
    data: [
      { value: 269.37, date: new Date('2019-01-01') },
      { value: 271.2, date: new Date('2020-01-01') },
      { value: 297.03, date: new Date('2021-01-01') },
      { value: 307.78, date: new Date('2022-01-01') },
      { value: 300.19, date: new Date('2023-01-01') },
    ],
    footer: 'GDP Growth of Finland (in billion USD)',
    dateRange: 'from 2019 to 2023',
  },
  {
    id: 3,
    name: 'Inflation Rate',
    type: 'spline',
    data: [
      { value: 1.02, date: new Date('2019-01-01') },
      { value: 0.29, date: new Date('2020-01-01') },
      { value: 2.19, date: new Date('2021-01-01') },
      { value: 7.12, date: new Date('2022-01-01') },
      { value: 6.25, date: new Date('2023-01-01') },
    ],
    footer: 'Inflation Rate of Finland (in percentage)',
    dateRange: 'from 2019 to 2023',
  },
  {
    id: 4,
    name: 'Exports and Imports',
    type: 'area',
    data: [
      { value: 76.9, date: new Date('2013-01-01'), category: 'Export' },
      { value: 80.5, date: new Date('2013-01-01'), category: 'Import' },
      { value: 77.1, date: new Date('2014-01-01'), category: 'Export' },
      { value: 80.7, date: new Date('2014-01-01'), category: 'Import' },
      { value: 75.3, date: new Date('2015-01-01'), category: 'Export' },
      { value: 78.8, date: new Date('2015-01-01'), category: 'Import' },
      { value: 76.8, date: new Date('2016-01-01'), category: 'Export' },
      { value: 80.0, date: new Date('2016-01-01'), category: 'Import' },
      { value: 80.7, date: new Date('2017-01-01'), category: 'Export' },
      { value: 83.7, date: new Date('2017-01-01'), category: 'Import' },
      { value: 86.8, date: new Date('2018-01-01'), category: 'Export' },
      { value: 90.1, date: new Date('2018-01-01'), category: 'Import' },
      { value: 88.5, date: new Date('2019-01-01'), category: 'Export' },
      { value: 92.0, date: new Date('2019-01-01'), category: 'Import' },
      { value: 77.1, date: new Date('2020-01-01'), category: 'Export' },
      { value: 81.1, date: new Date('2020-01-01'), category: 'Import' },
      { value: 84.0, date: new Date('2021-01-01'), category: 'Export' },
      { value: 90.6, date: new Date('2021-01-01'), category: 'Import' },
      { value: 95.3, date: new Date('2022-01-01'), category: 'Export' },
      { value: 100.7, date: new Date('2022-01-01'), category: 'Import' },
      { value: 91.8, date: new Date('2023-01-01'), category: 'Export' },
      { value: 97.4, date: new Date('2023-01-01'), category: 'Import' },
    ],
    footer: 'Exports and Imports of Finland  (in billion USD)',
    dateRange: 'from 2013 to 2023',
  },
  {
    id: 5,
    name: 'Energy Consumption by Source',
    type: 'pie',
    data: [
      { name: 'Oil', value: 30 },
      { name: 'Natural Gas', value: 20 },
      { name: 'Coal', value: 15 },
      { name: 'Nuclear', value: 25 },
      { name: 'Renewables', value: 10 },
    ],
    footer: 'Energy Consumption by Source in Finland (in percentage)',
    dateRange: 'in 2023',
  },
];

export default charts;
