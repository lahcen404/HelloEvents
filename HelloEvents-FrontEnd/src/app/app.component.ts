import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./shared/components/navbar/navbar.component";
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component";
import {FooterComponent} from "./shared/components/footer/footer.component";
import {HomeComponent} from "./core/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, SidebarComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloEvent-FrontEnd';
}
