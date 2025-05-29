import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface AppEvent{
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  available_seats: number;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
private apiUrl = "http://localhost:8080/api/v1/events"
  constructor(private http : HttpClient) { }

  getAllEvents(): Observable<AppEvent[]>{
  return this.http.get<AppEvent[]>(this.apiUrl)
  }
}
