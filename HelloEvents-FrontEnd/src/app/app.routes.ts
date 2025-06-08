import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {HomeComponent} from "./core/home/home.component";
import {authGuard} from "./core/guards/auth.guard";
import {AddEventComponent} from "./core/event/add-event/add-event.component";
import {adminGuard} from "./core/guards/admin.guard";
import {ProfileComponent} from "./core/profile/profile.component";

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-event', component: AddEventComponent },
  { path: 'edit-event/:id', component: AddEventComponent, canActivate: [adminGuard] },
  { path: 'profile', component: ProfileComponent },



  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
