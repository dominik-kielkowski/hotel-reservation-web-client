import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterDto } from "../../shared/header/register/register.component";
import {LoginDto} from "../../shared/header/login/login.component";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://localhost:5001/api/Account'; // Adjust your API URL

  constructor(private http: HttpClient) {}

  register(registerDto: RegisterDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, registerDto);
  }

  // Add the login method
  login(loginDto: LoginDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginDto);
  }
}
