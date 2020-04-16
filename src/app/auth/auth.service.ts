import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UsernameRes, SignupCreds, SignupRes, SignedinRes, SigninRes } from './auth-schema';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = 'https://api.angular-email.com/auth';

  username = '';
  signedin$ = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  isUsernameAvailable(username: string): Observable<UsernameRes> {
    return this.http.post<UsernameRes>(`${this.BASE_URL}/username`, {username});
  }

  signup(credentials: SignupCreds): Observable<SignupRes> {
    return this.http.post<SignupRes>(`${this.BASE_URL}/signup`, credentials)
      .pipe(
        tap(({ username }) => {
          this.signedin$.next(true);
          this.username = username;
        })
      );
  }

  checkAuth(): Observable<SignedinRes> {
    return this.http.get<SignedinRes>(`${this.BASE_URL}/signedin`)
      .pipe(tap(({ authenticated, username }) => {
        this.signedin$.next(authenticated);
        this.username = username;
      }));
  }

  signin(creds: any): Observable<SigninRes> {
    return this.http.post<SigninRes>(`${this.BASE_URL}/signin`, creds)
      .pipe(tap(({ username }) => {
        this.signedin$.next(true);
        this.username = username;
      }));
  }

  signout(): Observable<{}> {
    return this.http.post<{}>(`${this.BASE_URL}/signout`, {})
      .pipe(tap(() => this.signedin$.next(false)));
  }

}
