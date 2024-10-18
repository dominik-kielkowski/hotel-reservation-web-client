import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-dialog',
  standalone: true,
  templateUrl: './reservation-dialog.component.html',
  styleUrls: ['./reservation-dialog.component.css'],
  imports: [ReactiveFormsModule]  // Ensure ReactiveFormsModule is imported
})
export class ReservationDialogComponent {
  @Input() roomId!: number;  // Room ID passed from the parent component
  @Output() closeDialog = new EventEmitter<void>(); // Emit event to close dialog
  @Output() reserve = new EventEmitter<any>(); // Emit event with reservation data

  reservationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reservationForm = this.fb.group({
      begin: ['', Validators.required],
      end: ['', Validators.required]
    });
  }

  submitReservation() {
    if (this.reservationForm.valid) {
      this.reserve.emit({ roomId: this.roomId, ...this.reservationForm.value });
      this.close(); // Close dialog after submission
    }
  }

  close() {
    this.closeDialog.emit(); // Emit event to close the dialog
  }
}
