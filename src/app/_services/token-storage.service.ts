import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

const TOKEN_KEY = 'auth-token';
const LOGIN_EXPIRY = 3; //Number of days to keep the cookie

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor(private cookie: CookieService) {}

  signOut(): void {
    this.cookie.delete(TOKEN_KEY, '/');
  }

  deleteAll(): void {
    this.cookie.deleteAll('/');
  }

  public saveToken(token: string, remember?: boolean): void {
    this.cookie.delete(TOKEN_KEY);
    if (remember) {
      this.cookie.set(TOKEN_KEY, token, { expires: LOGIN_EXPIRY, path: '/' });
      return;
    }
    this.cookie.set(TOKEN_KEY, token, {
      path: '/',
    });
  }

  public getToken(): string | null {
    return this.cookie.get(TOKEN_KEY);
  }
}
