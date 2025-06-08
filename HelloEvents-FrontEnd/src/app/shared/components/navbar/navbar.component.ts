import { Component, EventEmitter, Output, inject} from '@angular/core';
import {AuthService} from "../../../core/services/auth/auth.service";
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {ProfileService, UserProfile} from "../../../core/services/profile/profile.service";


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
  profile?: UserProfile;

  constructor(private profileService: ProfileService , protected authService: AuthService, private router: Router) {
    this.profileService.getProfile().subscribe(p => this.profile = p);
  }

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
