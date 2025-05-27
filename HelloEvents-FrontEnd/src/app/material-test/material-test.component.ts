import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatListSubheaderCssMatStyler} from "@angular/material/list";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-material-test',
  templateUrl: './material-test.component.html',
  standalone: true,
  imports: [
    MatCardActions,
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle,
    MatCard,
    MatCardHeader,
    MatLabel,
    MatFormField,
    MatButton,
    MatListSubheaderCssMatStyler,
    MatInput
  ],
  styleUrls: ['./material-test.component.css']
})
export class MaterialTestComponent {}
