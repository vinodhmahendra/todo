import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private authService: AuthService,private router: Router) {}
  
  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  getCurrentUser(): string {
    return this.authService.getCurrentUser() || 'User';
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
