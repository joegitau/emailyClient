import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EmailSummary, Email } from './email-schema';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private BASE_URL = 'https://api.angular-email.com/emails';

  constructor(private http: HttpClient) { }

  getEmails(): Observable<EmailSummary[]> {
    return this.http.get<EmailSummary[]>(`${this.BASE_URL}`);
  }

  getEmail(id: string): Observable<Email> {
    return this.http.get<Email>(`${this.BASE_URL}/${id}`);
  }

}
