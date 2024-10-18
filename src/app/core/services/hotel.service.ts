import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Existing method
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

    return this.http.get<any>(`${this.apiUrl}/Hotel`, { params });
  }

  getHotelById(id: number): Observable<any> {
    const url = `${this.apiUrl}/Hotel/${id}`;
    return this.http.get<any>(url);
  }

  makeReservation(roomId: number, reservationData: any): Observable<any> {
    const url = `${this.apiUrl}/Room/${roomId}/reservations`;

    const token = localStorage.getItem('token');

    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return this.http.post<any>(url, reservationData, { headers });
  }
}
