import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'current_user';

  private isLoggedIn = false;
  private currentUser = '';
  
  private validCredentials = {
    username: 'admin',
    password: 'password123'
  };
  
  login(username: string, password: string): boolean {

    //validate credentials
    if (username === this.validCredentials.username && 
        password === this.validCredentials.password) {

      const token = this.generateToken(username);
        
      // Store in Session Storage
      sessionStorage.setItem(this.TOKEN_KEY,token);
      sessionStorage.setItem(this.USER_KEY,username);

      return true;
    }
    return false;
  }
  
  logout(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.USER_KEY);
  }
  
  isAuthenticated(): boolean {
    return !!sessionStorage.getItem(this.TOKEN_KEY);
  }
  
  getCurrentUser(): string | null {
    return sessionStorage.getItem(this.USER_KEY);
  }

  private generateToken(username: string): string {
    // Simple token generation (use JWT in production)
    const timestamp = Date.now();
    return btoa(`${username}:${timestamp}`);
  }

}