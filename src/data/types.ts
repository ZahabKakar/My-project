export interface ChartData {
  [key: string]: any;
  value?: number;
  date?: Date;
  category?: string;
  name?: string;
}

export interface Chart {
  id: number;
  name: string;
  footer?: string;
  dateRange?: string;
  type: string;
  data: ChartData[];
}
