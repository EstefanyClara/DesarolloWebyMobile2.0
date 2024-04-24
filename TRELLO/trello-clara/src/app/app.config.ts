import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"trello-b5c6f","appId":"1:127625117839:web:32783ae67e4ab0affcf0fa","storageBucket":"trello-b5c6f.appspot.com","apiKey":"AIzaSyAmrIJl5cE4vLBHpjMw8E7k0sbO41WnO54","authDomain":"trello-b5c6f.firebaseapp.com","messagingSenderId":"127625117839","measurementId":"G-ZNKNKP7HQB"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"trello-b5c6f","appId":"1:127625117839:web:32783ae67e4ab0affcf0fa","storageBucket":"trello-b5c6f.appspot.com","apiKey":"AIzaSyAmrIJl5cE4vLBHpjMw8E7k0sbO41WnO54","authDomain":"trello-b5c6f.firebaseapp.com","messagingSenderId":"127625117839","measurementId":"G-ZNKNKP7HQB"}))), importProvidersFrom(provideFirestore(() => getFirestore()))
  ]
};
/*El array de rutas es como se va a ejecutar nuestra aplicación, 
es decir, en qué orden se van a cargar los componentes.*/