import { Component } from '@angular/core';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import {HeaderComponent} from "./header/header.component";
import {RouterOutlet} from "@angular/router"; // Import the standalone component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HotelListComponent, HeaderComponent, RouterOutlet]
})
export class AppComponent {
}
