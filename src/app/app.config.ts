import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"laboratorioivtpclinicaaranda","appId":"1:145080067078:web:aab408fe736a0b51550f87","storageBucket":"laboratorioivtpclinicaaranda.appspot.com","apiKey":"AIzaSyB0sew5jtuowWVtr9NF8dQFv_u2BwkjVxA","authDomain":"laboratorioivtpclinicaaranda.firebaseapp.com","messagingSenderId":"145080067078"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage()), provideAnimationsAsync(), 
    provideHttpClient()
  ]
};
