import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private apiUrl = 'https://localhost:5001/api/hotel';  // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Method to get a list of hotels with pagination and filtering
  getHotels(sortBy?: string, filter?: string, pageNumber: number = 1, pageSize: number = 10): Observable<any> {
    let params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    if (sortBy) {
      params = params.set('sortBy', sortBy);
    }

    if (filter) {
      params = params.set('filter', filter);
    }

    return this.http.get<any>(this.apiUrl, { params });
  }
}
