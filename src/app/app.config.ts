import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {HotelListComponent} from "./hotel-list/hotel-list.component";
import {HotelDetailsComponent} from "./hotel-details/hotel-details.component";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter([
      {
        path: '',
        component: HotelListComponent
      },
      {
        path: 'details',
        component: HotelDetailsComponent
      }
    ]),
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)
  ]
};
