import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface AppEvent{
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  availableSeats: number;
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

  addEvent(event: Event): Observable<Event>{
  return this.http.post<Event>(this.apiUrl,event)
  }

  getEventById(id: number): Observable<AppEvent> {
    return this.http.get<AppEvent>(`${this.apiUrl}/${id}`);
  }

  updateEvent(id: number, event: AppEvent): Observable<AppEvent> {
    return this.http.put<AppEvent>(`${this.apiUrl}/${id}`, event);
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
