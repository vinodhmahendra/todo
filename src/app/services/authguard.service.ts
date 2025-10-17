// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

// old code

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthguardService implements CanActivate{

//   constructor(private authService: AuthService,private router:Router) { }

//   canActivate(): boolean {
//     if ( this.authService.isAuthenticated()) {
//       return true;
//     }
//     this.router.navigate(['/login']);
//     return false;
//   }
// }

// Angular 17+ Modern Functional Guard : ( No CLass,Interface, Dependency Injection, Simpler)

export const authGuard = ()=> {
  const authService = inject(AuthService);
  const router = inject(Router);

  if ( authService.isAuthenticated() ) {
    return true;
  }
  router.navigate(['/login']);
  return false;
;}
