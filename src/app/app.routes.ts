import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'infraX',
    loadComponent: () => import('./pages/infra-x/infra-x.component').then((m) => m.InfraXComponent)
  }
];
