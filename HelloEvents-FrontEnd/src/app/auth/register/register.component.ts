import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatButton} from "@angular/material/button";
import {MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatOption,
    MatButton,
    MatSelect,
    MatLabel
  ],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  form = {
    name: '',
    email: '',
    password: '',
    role: 'CUSTOMER' // default
  };

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.auth.register(this.form).subscribe({
      next: (res) => {
        this.auth.saveAuth(res);
        this.router.navigate(['/login']);
        console.log("Register doooone!")
      },
      error: (err) => console.log(err)
    });
  }
}
