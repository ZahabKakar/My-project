import { Routes } from '@angular/router';
import { SettingsComponent } from './pages/settings/settings.component';
import { ViewComponent } from './view/view.component';

export const routes: Routes = [
  { path: '', redirectTo: '/view', pathMatch: 'full' },
  { path: 'view', component: ViewComponent },
  { path: 'settings', component: SettingsComponent },
];
