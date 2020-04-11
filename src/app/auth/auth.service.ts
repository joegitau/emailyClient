import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

interface UsernameRes {
  available: boolean;
}

interface SignupCreds {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignupRes {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = 'https://api.angular-email.com/auth';

  constructor(private http: HttpClient) { }

  isUsernameAvailable(username: string): Observable<UsernameRes> {
    return this.http.post<UsernameRes>(`${this.BASE_URL}/username`, {username});
  }

  signup(credentials: SignupCreds): Observable<SignupRes> {
    return this.http.post<SignupRes>(`${this.BASE_URL}/signup`, credentials);
  }

}
