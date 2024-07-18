import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ChartsService } from '../state/services/charts.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private chartsService: ChartsService) {}

  ngOnInit() {
    this.chartsService.loadDefaultCharts();
    console.log('App initialized and default charts loaded');
  }
}
