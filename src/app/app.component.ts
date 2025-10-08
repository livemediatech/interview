import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush //Change Detection Functionality
})
export class AppComponent {

}
