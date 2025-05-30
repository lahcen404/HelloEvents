import { provideAnimations } from '@angular/platform-browser/animations';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {AuthInterceptor} from "./app/interceptor/auth.interceptor";

bootstrapApplication(AppComponent, {
  providers: [provideAnimations(), provideRouter(routes),provideHttpClient(),provideHttpClient(withInterceptors([AuthInterceptor]))],
}).catch((err) => console.error(err));
