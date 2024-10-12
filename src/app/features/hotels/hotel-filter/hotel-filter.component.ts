import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.scss'],
  imports: [FormsModule],
  standalone: true
})
export class HotelFilterComponent {
  @Output() filterChanged = new EventEmitter<string>();

  filterValue: string = '';

  onFilterChange(filterValue: string) {
    this.filterChanged.emit(filterValue);
  }
}
