import { Routes } from '@angular/router';
import { Results } from './pages/results/results';
import { Dashboard } from './pages/dashboard/dashboard';
import { Survey } from './pages/survey/survey';
import { Admin } from './pages/admin/admin';
import { MultiChart } from './pages/multiChart/multiChart';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'survey', component: Survey },
  { path: 'admin', component: Admin },
  { path: 'results', component: Results },
  { path: 'multiChart', component: MultiChart }
];
