import { Component, OnInit } from '@angular/core';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import {ConfigService} from "./services/config.service"; // Import the standalone component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HotelListComponent, HeaderComponent, RouterOutlet]
})
export class AppComponent implements OnInit {
  apiUrl: string = ''; // Initialize to an empty string

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.configService.loadConfig().subscribe({
      next: () => {
        this.apiUrl = this.configService.getApiUrl(); // Access API_URL
        console.log('API URL:', this.apiUrl); // Use it as needed
      },
      error: (err) => {
        console.error('Could not load config', err);
      }
    });
  }
}
