import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { EmailService } from './email.service';
import { Email } from './email-schema';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email> {

  constructor(private emailService: EmailService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Email> {
    return this.emailService
      .getEmail(route.paramMap.get('id'));
  }
}

