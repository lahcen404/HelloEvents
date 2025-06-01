import { Component } from '@angular/core';
import {NavbarComponent} from "./shared/components/navbar/navbar.component";
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component";
import {RouterOutlet} from "@angular/router";
import {FooterComponent} from "./shared/components/footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    RouterOutlet,
    FooterComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && this.isSidebarOpen) {
          this.isSidebarOpen = false; // Close sidebar if window resized to desktop
        }
      });
    }
  }
}
