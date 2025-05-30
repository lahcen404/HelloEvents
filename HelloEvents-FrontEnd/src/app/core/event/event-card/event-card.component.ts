import { Component, Input } from '@angular/core';
import {AppEvent} from '../../services/event/event.service';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  imports: [
  ],
  standalone: true
})
export class EventCardComponent {
  @Input() event!: AppEvent;
}
