import { Component } from '@angular/core';
import { PasswordComponent } from './password.component'; // Import PasswordComponent
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PasswordComponent, RouterModule], // Add PasswordComponent to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }