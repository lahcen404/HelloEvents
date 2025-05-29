import { Component } from '@angular/core';
import {EventListComponent} from "../event/event-list/event-list.component";
import {EventCardComponent} from "../event/event-card/event-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    EventListComponent,
    EventListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
