import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  items = [
    {
      label: 'View mode',
      href: '/view',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
  ];

  constructor(private router: Router) {}

  isActive(item: any): boolean {
    return this.router.url === item.href;
  }
}
