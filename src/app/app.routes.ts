import { Routes } from '@angular/router';
import { authRoutes } from './auth.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },

  ...authRoutes
];
