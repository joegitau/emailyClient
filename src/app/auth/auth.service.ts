import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface UsernameRes {
  available: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL: string = 'https://api.angular-email.com/auth';

  constructor(private http: HttpClient) { }

  isUsernameAvailable(username: string): Observable<UsernameRes> {
    return this.http.post<UsernameRes>('https://api.angular-email.com/auth/username', {username});
  }
}
