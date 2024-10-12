import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private apiUrl: string = "";

  constructor(private http: HttpClient) {
    this.apiUrl = `https://hotel-reservation-api.blacksea-5eb9e640.polandcentral.azurecontainerapps.io/api/Hotel`;
  }

  getHotels(sortBy?: string, filter?: string, pageNumber: number = 1, pageSize: number = 10): Observable<any> {
    console.log(this.apiUrl)
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
