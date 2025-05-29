import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface AuthResponse {
  token: string;
  role: 'ADMIN' | 'COSTUMER';
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role: string; // for role selection
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient) { }

  register(data: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, data);
  }


  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/authenticate`, data);
  }

  saveAuth(res: AuthResponse) {
    localStorage.setItem('token', res.token);
    localStorage.setItem('role', res.role);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRole(): 'ADMIN' | 'COSTUMER' | null {
    return localStorage.getItem('role') as 'ADMIN' | 'COSTUMER' | null;
  }

  logout() {
    localStorage.clear();
  }

  isAdmin(): boolean {
    return this.getRole() === 'ADMIN';
  }
}
