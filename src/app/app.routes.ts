import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'datasets',
    loadComponent: () => import('./pages/datasets/datasets.component').then((m) => m.DatasetsComponent),
  },
  {
    path: 'company',
    loadComponent: () => import('./pages/company/company.component').then((m) => m.CompanyComponent),
  },
];
