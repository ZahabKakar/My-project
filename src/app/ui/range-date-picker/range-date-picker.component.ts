import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CalendarModule } from 'primeng/calendar';
import { selectRangeDates } from '../../../state/selectors/date-range.selectors';
import { setDateRange } from '../../../state/actions/date-range.actions';

@Component({
  selector: 'app-range-date-picker',
  standalone: true,
  imports: [CalendarModule, FormsModule, CommonModule],
  templateUrl: './range-date-picker.component.html',
  styleUrl: './range-date-picker.component.css',
})
export class RangeDatePickerComponent {
  rangeDates: Date[] | undefined;

  constructor(private store: Store) {
    this.store.select(selectRangeDates).subscribe((rangeDates) => {
      this.rangeDates = rangeDates || undefined;
    });
  }

  onDateChange() {
    if (this.rangeDates) {
      console.log('Range Dates:', this.rangeDates);
      this.store.dispatch(setDateRange({ rangeDates: this.rangeDates }));
    }
  }
}
