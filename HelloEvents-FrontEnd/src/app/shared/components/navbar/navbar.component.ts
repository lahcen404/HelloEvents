import { Component, EventEmitter, Output, inject} from '@angular/core';
import {AuthService} from "../../../core/services/auth/auth.service";
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(protected authService: AuthService, private router: Router) {}

  @Output() toggleSidebarEvent = new EventEmitter<void>();

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  onToggleSidebar() {
    this.toggleSidebarEvent.emit();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
