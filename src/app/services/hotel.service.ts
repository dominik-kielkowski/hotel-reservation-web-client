import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service'; // Import ConfigService

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private apiUrl: string;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.apiUrl = `${this.configService.getApiUrl()}/hotel`;
  }

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
