import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

  errorMessage = "An error Occured! Contact Support @9844454621";

  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  goToLogin(): void {
    // console.log("Go To Login Page");
    this.router.navigate(['/login']);
  }

}
