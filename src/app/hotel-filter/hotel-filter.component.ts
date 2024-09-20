import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.scss'],
  standalone: true
})
export class HotelFilterComponent {
  @Output() filterChanged = new EventEmitter<string>();

  onFilterChange(filterValue: string) {
    this.filterChanged.emit(filterValue);
  }
}
