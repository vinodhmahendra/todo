import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private currentUser = '';
  
  private validCredentials = {
    username: 'admin',
    password: 'password123'
  };
  
  login(username: string, password: string): boolean {
    if (username === this.validCredentials.username && 
        password === this.validCredentials.password) {
      this.isLoggedIn = true;
      this.currentUser = username;
      return true;
    }
    return false;
  }
  
  logout(): void {
    this.isLoggedIn = false;
    this.currentUser = '';
  }
  
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
  
  getCurrentUser(): string {
    return this.currentUser;
  }
}