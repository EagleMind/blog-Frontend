import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from '../_models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private API_URL = environment.serverUrl;

  constructor(private http: HttpClient) {}

  me(): Observable<any> {
    return this.http.get(this.API_URL + 'me');
  }

  update(profile: Profile): Observable<any> {
    return this.http.put(this.API_URL + 'me/update', {
      profile: profile,
    });
  }
}
