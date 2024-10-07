import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: any;

  constructor(private http: HttpClient) {}

  loadConfig(): Observable<any> {
    return this.http.get('/assets/config.json').pipe(
      tap(config => {
        this.config = config; // Save the loaded config
      })
    );
  }

  getApiUrl(): string {
    return this.config ? this.config.API_URL : '';
  }
}
