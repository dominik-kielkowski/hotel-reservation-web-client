import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/layout/app.config';
import { AppComponent } from './app/layout/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
