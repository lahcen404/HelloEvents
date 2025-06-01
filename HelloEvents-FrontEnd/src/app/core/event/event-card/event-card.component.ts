import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import {NgIf, NgStyle} from "@angular/common";
import { AppEvent, EventService } from '../../services/event/event.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  standalone: true,
  imports: [NgStyle, NgIf]
})
export class EventCardComponent {
  @Input() event!: AppEvent;
  // Emit the deleted event ID
  @Output() deleted = new EventEmitter<number>();

  constructor(
    private router: Router,
    private eventService: EventService,
    public authService: AuthService
  ) {}

  onEdit(event: AppEvent) {
    this.router.navigate(['/edit-event', event.id]);
  }

  onDelete(id: number) {
    if (confirm('Are you sure you want to delete this event?')) {
      this.eventService.deleteEvent(id).subscribe(() => {
        alert('Event deleted!');
        this.deleted.emit(id); // Notify parent to remove this event

      });
    }
  }
}

