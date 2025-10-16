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
  currentDate = new Date();
  greeting = '';
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}
  
  ngOnInit(): void {
    // Read route parameter
    this.userName = this.route.snapshot.params['name'];
    this.setGreeting();
  }
  
  setGreeting(): void {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.greeting = 'Good Morning';
    } else if (hour < 18) {
      this.greeting = 'Good Afternoon';
    } else {
      this.greeting = 'Good Evening';
    }
  }
  goTodos(): void {
    this.router.navigate(['/todos']);
  }
  
  logout(): void {
    this.authService.logout(); 
    this.router.navigate(['/login']);
  }
}