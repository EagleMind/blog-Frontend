import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const CONSENT = 'cookie-consent';

const LOGIN_EXPIRY = 3;
const CONSENT_EXPIRY = 30;

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor(private cookie: CookieService) {}

  signOut(): void {
    this.cookie.delete(TOKEN_KEY, '/');
    this.cookie.delete(USER_KEY, '/');
  }

  deleteAll(): void {
    this.cookie.deleteAll('/');
  }

  public saveToken(token: string, remember?: boolean): void {
    this.cookie.delete(TOKEN_KEY);
    if (remember) {
      this.cookie.set(TOKEN_KEY, token, { expires: LOGIN_EXPIRY, path: '/' });
    } else {
      this.cookie.set(TOKEN_KEY, token, {
        path: '/',
      });
    }
  }

  public getToken(): string | null {
    return this.cookie.get(TOKEN_KEY);
  }

  public saveUser(user: any, remember?: boolean): void {
    this.cookie.delete(USER_KEY);
    if (remember) {
      this.cookie.set(USER_KEY, JSON.stringify(user), {
        expires: LOGIN_EXPIRY,
        path: '/',
      });
    } else {
      this.cookie.set(USER_KEY, JSON.stringify(user), {
        path: '/',
      });
    }
  }

  public getUser(): any {
    const user = this.cookie.get(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  // getCookieConsent(): any {
  //   let consent = this.cookie.get(CONSENT);
  //   return consent;
  // }

  // setCookieConsent(value: boolean): void {
  //   this.cookie.set(CONSENT, value.toString(), {
  //     expires: CONSENT_EXPIRY,
  //     path: "/",
  //   });
  // }
}
