import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface AuthResponse {
  token: string;
  role: 'ADMIN' | 'CUSTOMER';
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role: 'CUSTOMER'; // for role selection
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/v1/auth';
  private TOKEN_KEY = 'auth-token';
  constructor(private http: HttpClient) { }

  register(data: { password: string; role: string; name: string; email: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, data);
  }


  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/authenticate`, data);
  }

  saveAuth(res: AuthResponse) {
    console.log('Saved role:', res.role);
    this.saveToken(res.token);
    localStorage.setItem('role', res.role);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getRole(): 'ADMIN' | 'CUSTOMER' | null {
    return localStorage.getItem('role') as 'ADMIN' | 'CUSTOMER' | null;
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem('role');
  }

  saveToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  isAdmin(): boolean {
    return this.getRole() === 'ADMIN';
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
