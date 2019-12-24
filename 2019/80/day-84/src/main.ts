// Angular is a development platform for building mobile and desktop web applications using TypeScript/JavaScript and other languages.
// https://angular.io/
//
// npm install -g @angular/cli
// ng new day84
// ng serve
//
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
