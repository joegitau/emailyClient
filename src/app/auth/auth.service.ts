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

  signedin$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  isUsernameAvailable(username: string): Observable<UsernameRes> {
    return this.http.post<UsernameRes>(`${this.BASE_URL}/username`, {username});
  }

  signup(credentials: SignupCreds): Observable<SignupRes> {
    return this.http.post<SignupRes>(`${this.BASE_URL}/signup`, credentials)
      .pipe(
        tap(() => this.signedin$.next(true))
      );
  }

  checkAuth(): Observable<SignedinRes> {
    return this.http.get<SignedinRes>(`${this.BASE_URL}/signedin`)
      .pipe(tap(({ authenticated }) => this.signedin$.next(authenticated)));
  }

  signin(creds: any): Observable<SigninRes> {
    return this.http.post<SigninRes>(`${this.BASE_URL}/signin`, creds)
      .pipe(tap(() => this.signedin$.next(true)));
  }

  signout(): Observable<{}> {
    return this.http.post<{}>(`${this.BASE_URL}/signout`, {})
      .pipe(tap(() => this.signedin$.next(false)));
  }

}
