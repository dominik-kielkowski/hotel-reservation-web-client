import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../core/services/hotel.service';
import {HotelPaginationComponent} from "../hotel-pagination/hotel-pagination.component";
import {HotelFilterComponent} from "../hotel-filter/hotel-filter.component";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss'],
  imports: [HotelPaginationComponent, HotelFilterComponent, FormsModule, RouterLink],
  standalone: true
})
export class HotelListComponent implements OnInit {
  hotels: any[] = [];
  totalItems = 0;
  pageSize = 5;
  pageNumber = 1;
  filter = '';
  sortBy = 'name';

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.loadHotels();
  }

  loadHotels() {
    this.hotelService.getHotels(this.sortBy, this.filter, this.pageNumber, this.pageSize).subscribe(
      (response) => {
        this.hotels = response;
        this.totalItems = 50;
      },
      (error) => {
        console.error('Error fetching hotels', error);
      }
    );
  }

  onFilterChange(newFilter: string) {
    this.filter = newFilter;
    this.pageNumber = 1; // Reset to first page on filter change
    this.loadHotels();
  }

  onSortChange(newSortBy: string) {
    this.sortBy = newSortBy;
    this.loadHotels();
  }

  onPageChange(newPageNumber: number) {
    this.pageNumber = newPageNumber;
    this.loadHotels();
  }

  onPageSizeChange(newPageSize: number) {
    this.pageSize = newPageSize;
    this.pageNumber = 1;
    this.loadHotels();
  }
}
