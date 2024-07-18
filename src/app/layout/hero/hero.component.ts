import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  title = 'Finland Stats 🇫🇮 ';
  description = "Statistics about Finland's population, area, and weather.";
}
