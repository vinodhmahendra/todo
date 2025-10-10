import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = 'admin';
  password = '';
  errorMessage = '';
  
  constructor(private authService: AuthService, private router: Router) {}
  
  onLogin(): void {
    if (this.authService.login(this.username, this.password)) {
      // Navigate with username as route parameter
      this.router.navigate(['/welcome', this.username]);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}