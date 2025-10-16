import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
  userName = '';

  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}
  
  
  
 
    ngOnInit(): void {
    // Check if user is authenticated
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return;
    }
    
    // Get username from session storage or route
    this.userName = this.authService.getCurrentUser() || 
                   this.route.snapshot.params['name'];
  }
  
  logout(): void {
    this.authService.logout(); 
    this.router.navigate(['/login']);
  }
}