import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MaterialTestComponent} from "./material-test/material-test.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialTestComponent, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloEvent-FrontEnd';
}
