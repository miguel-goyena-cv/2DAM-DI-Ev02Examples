import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import { routes } from './app.routes';
import { loggingInterceptor } from './utils/http_interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(
    withInterceptors([loggingInterceptor]),
  )]

  // providers: [provideRouter(routes), provideHttpClient()]
};
