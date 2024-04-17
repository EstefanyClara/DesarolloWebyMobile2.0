import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)  /*App config  se definen todas las configuraciones de la aplicación, como las rutas, los servicios, etc.*/
  .catch((err) => console.error(err));
