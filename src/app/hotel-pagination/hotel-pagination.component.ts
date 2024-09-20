import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hotel-pagination',
  templateUrl: './hotel-pagination.component.html',
  styleUrls: ['./hotel-pagination.component.scss'],
  standalone: true
})
export class HotelPaginationComponent {
  @Input() totalItems: number = 0;
  @Input() pageSize: number = 10;
  @Input() currentPage: number = 1;

  @Output() pageChanged = new EventEmitter<number>();
  @Output() pageSizeChanged = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  onPageChange(newPage: number) {
    if (newPage > 0 && newPage <= this.totalPages) {
      this.pageChanged.emit(newPage);
    }
  }

  onPageSizeChange(newPageSize: number) {
    this.pageSizeChanged.emit(newPageSize);
  }
}
