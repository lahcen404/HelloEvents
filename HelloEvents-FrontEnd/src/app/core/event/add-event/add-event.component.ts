import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {EventService} from "../../services/event/event.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {
  eventForm:FormGroup;

  constructor(private fb:FormBuilder , private eventService : EventService){
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      category: ['', Validators.required],
      availableSeats: [0, [Validators.required, Validators.min(1)]],
    });
}
  onSubmit() {
    if (this.eventForm.valid) {
      const newEvent: Event = this.eventForm.value;
      this.eventService.addEvent(newEvent).subscribe({
        next: (response) => {
          alert('Event added successfully!');
          this.eventForm.reset();
        },
        error: (err) => {
          console.error(err);
          alert('Error adding event.');
        }
      });
    }
  }
}
