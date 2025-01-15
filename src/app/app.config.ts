import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideRouter(routes), provideZoneChangeDetection({ eventCoalescing: true }), provideAnimationsAsync()],
};
