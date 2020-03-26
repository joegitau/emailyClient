import { AbstractControl } from '@angular/forms';

export function passwordMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const mainPassword = c.get('password');
  const confirmPassword = c.get('confirmPassword');

  if (mainPassword.pristine || confirmPassword.pristine) return null;

  if (mainPassword.value === confirmPassword.value) return null;

  return { 'match': true };
}
