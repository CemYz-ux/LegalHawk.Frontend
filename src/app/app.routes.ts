import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../shared/layouts/main-layout/main-layout.component';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'legal-contracts',
        loadChildren: () =>
          import('./legal-contracts/legal-contracts.module').then(
            (m) => m.LegalContractsModule
          ),
      },
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
