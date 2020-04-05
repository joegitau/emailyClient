import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { map, catchError, debounceTime, flatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (c: AbstractControl) => c.valueChanges.pipe(
    debounceTime(200),
    flatMap(value => {

      return this.authService.isUsernameAvailable(value).pipe(
        map(() => null), // returns { available: true }
        catchError(err => {
          if(err.error.username) return of({noneUniquerUsername: true})
          return of({noConnection: true})
        }) // coming from api
      );
    })
  );
}
