import { Routes } from '@angular/router';
import {HotelListComponent} from "../features/hotels/hotel-list/hotel-list.component";
import {HotelDetailsComponent} from "../features/hotels/hotel-details/hotel-details.component";

export const routes: Routes = [
  {
    path: '',
    component: HotelListComponent
  },
  {
    path: 'details/:hotelId',
    component: HotelDetailsComponent
  }
]
