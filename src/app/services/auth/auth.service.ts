import { Injectable } from '@angular/core';
import { SESSION } from '../../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    return !!(localStorage.getItem(SESSION))
  }

  login(credentials: string): void {
    localStorage.setItem(SESSION, credentials);
  }

  logout(): void {
    localStorage.removeItem(SESSION)
  }
}
