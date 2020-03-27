import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UniqueUsername implements AsyncValidator {
  constructor(private http: HttpClient) {}

  validate = (c: AbstractControl) => {
    const { value } = c;

    this.http.post<any>('https://api.angular-email.com/auth/username', {
      username: value
    }).pipe(
      map(() => null), // returns { available: true }
      catchError(err => {
        if(err.error.username) return of({noneUniquerUsername: true})
        return of({noConnection: true})
      }) // coming from api
    );

    return null;

  }
}
