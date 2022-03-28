import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = environment.serverUrl;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.API_URL + 'login', {
      email: email,
      password: password,
    });
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post(this.API_URL + 'register', {
      email: email,
      password: password,
    });
  }
}
