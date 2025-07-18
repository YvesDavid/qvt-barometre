//Tout ce qui concerne des providers globaux (API, routing, interceptors) se fait ici.

import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, importProvidersFrom  } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routes } from './app.routes';
import { AuthInterceptor } from './services/auth-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    // Fournit HttpClient à toute l'app
    importProvidersFrom(HttpClientModule),

    // Optionnel : ajoute un interceptor HTTP global (auth, loader, logs, etc.)
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, // <-- ton interceptor
      //multi: true est obligatoire pour empiler plusieurs interceptors
      multi: true
    }
  ]
};
