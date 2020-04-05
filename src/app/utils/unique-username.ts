import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { map, catchError, debounceTime, flatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (c: AbstractControl) => {
    const { value } = c;

    return this.authService.isUsernameAvailable(value).pipe(
      map(value => {
        if (value.available) return null;
      }),
      catchError(err => {
        console.log(err);
        if (err.error.username) return of({nonUniqueUsername: true});
        return of({noConnection: true})
      })
    );
  }

  // alternate - cancels multiple requests to api (debouncedTime)
  // validate = (c: AbstractControl) => c.valueChanges.pipe(
  //   debounceTime(200),

  //   flatMap(value => {
  //     return this.authService.isUsernameAvailable(value).pipe(
  //       map(value => {
  //         if (value.available) return null;
  //       }),
  //       catchError(err => {
  //         if (err.error.username) return of({nonUniqueUsername: true}); // response variable assigned in api
  //         return of({noConnection: true}); // handles connection errors
  //       })
  //     );
  //   })
  // );
}
