import { Component } from '@angular/core';
import { HotelListComponent } from '../features/hotels/hotel-list/hotel-list.component';
import { HeaderComponent } from '../shared/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HotelListComponent, HeaderComponent, RouterOutlet]
})
export class AppComponent {
}
