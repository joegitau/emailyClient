import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { EmailService } from './email.service';
import { Email } from './email-schema';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email> {

  constructor(private emailService: EmailService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Email> {
    return this.emailService
      .getEmail(route.paramMap.get('id'))
      .pipe(catchError(() => {
        this.router.navigateByUrl('/inbox/not-found');

        return EMPTY;
      }));
  }
}

