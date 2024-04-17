import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideClientHydration()
  ]
};
/*El array de rutas es como se va a ejecutar nuestra aplicación, 
es decir, en qué orden se van a cargar los componentes.*/