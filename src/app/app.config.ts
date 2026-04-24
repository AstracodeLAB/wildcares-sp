import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter([
      { path: '', loadComponent: () => import('./pages/home-page/home-page').then(m => m.HomePageComponent) },
      { path: 'donar', loadComponent: () => import('./pages/donate-page/donate-page').then(m => m.DonatePage) },
      { path: 'que-hacer', loadComponent: () => import('./pages/que-hacer-page/que-hacer-page').then(m => m.QueHacerPageComponent) },
      { path: 'actividades', loadComponent: () => import('./pages/actividades-page/actividades-page').then(m => m.ActividadesPage) },
    ]),
  ]
};