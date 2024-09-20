import { Component } from '@angular/core';
import { HotelListComponent } from './hotel-list/hotel-list.component'; // Import the standalone component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HotelListComponent]
})
export class AppComponent {
}
