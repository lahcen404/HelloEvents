import { Component, OnInit } from '@angular/core';
import { ProfileService, UserProfile } from '../services/profile/profile.service';
import { AuthService } from '../services/auth/auth.service';
import { NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: UserProfile | undefined;
  isEdit = false;
  updatedName = '';
  errorMessage: string | null = null;

  constructor(
    private profileService: ProfileService,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    console.log('ProfileComponent: ngOnInit - Attempting to fetch profile...');
    this.errorMessage = null;

    this.profileService.getProfile().subscribe(
      (data: UserProfile) => {
        console.log('ProfileComponent: SUCCESS - Profile data received from backend:', data);
        if (data && data.name != null && data.email != null && data.role != null) {
          this.profile = data;
          this.updatedName = data.name;
          console.log('ProfileComponent: this.profile has been SET:', this.profile);
        } else {
          console.warn('ProfileComponent: Received data from backend, but it seems incomplete, null, or undefined:', data);
          this.errorMessage = 'Profile data received is incomplete. Please try again later.';
          this.profile = undefined;
        }
      },
      (error) => {
        console.error('ProfileComponent: ERROR - Error fetching profile from backend:', error);
        if (error.status === 401 || error.status === 403) {
          this.errorMessage = 'Authorization failed. Please ensure you are logged in and have permissions to view this page.';
        } else if (error.status === 404) {
          this.errorMessage = 'Profile not found. Please contact support.';
        } else if (error.status === 0) {
          this.errorMessage = 'Could not connect to the server. Please check your network connection or try again later.';
        } else {
          this.errorMessage = 'An error occurred while fetching your profile. Please try again later.';
        }
        this.profile = undefined;
      }
    );
  }

  toggleEdit(): void {
    if (this.profile && !this.isEdit) {
      this.updatedName = this.profile.name;
    }
    this.isEdit = !this.isEdit;
  }

  saveChanges(): void {
    if (!this.profile || !this.updatedName.trim()) {
      this.errorMessage = "Name cannot be empty.";
      return;
    }
    this.errorMessage = null;

    this.profileService.updateProfile({ name: this.updatedName }).subscribe(
      (updatedProfile: UserProfile) => {
        console.log('ProfileComponent: SUCCESS - Profile updated:', updatedProfile);
        if (this.profile) {
          this.profile.name = updatedProfile.name;
        }
        this.updatedName = updatedProfile.name;
        this.isEdit = false;
      },
      (error) => {
        console.error('ProfileComponent: ERROR - Error updating profile:', error);
        if (error.status === 401 || error.status === 403) {
          this.errorMessage = 'Authorization failed. Could not save changes.';
        } else {
          this.errorMessage = 'An error occurred while saving your profile. Please try again later.';
        }
      }
    );
  }
}
