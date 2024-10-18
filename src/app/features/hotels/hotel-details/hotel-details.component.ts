import {Component, input, OnInit  } from '@angular/core';
import { HotelService } from "../../../core/services/hotel.service";
import {ReservationDialogComponent} from "./reservation-dialog/reservation-dialog/reservation-dialog.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-hotel-details',
  standalone: true,
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css'],
  imports: [CommonModule, ReservationDialogComponent]
})
export class HotelDetailsComponent implements OnInit {
  hotelId = input.required<string>();
  hotel: any;
  showReservationDialog: boolean = false;
  selectedRoomId!: number;

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    console.log(this.hotelId.toString());
    const id = Number(this.hotelId());
    this.hotelService.getHotelById(id).subscribe(data => {
      this.hotel = data;
    });
  }

  reserveRoom(roomId: number) {
    this.selectedRoomId = roomId; // Set the selected room
    this.showReservationDialog = true; // Show the reservation dialog
  }

  handleReservation(reservationData: any) {
    this.hotelService.makeReservation(this.selectedRoomId, reservationData).subscribe(
      response => {
        console.log('Reservation successful:', response);
        this.showReservationDialog = false; // Close dialog on success
      },
      error => {
        console.error('Reservation failed:', error);
      }
    );
  }

  closeDialog() {
    this.showReservationDialog = false; // Close dialog
  }
}
