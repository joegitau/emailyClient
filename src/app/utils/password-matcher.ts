import { AbstractControl } from '@angular/forms';

export function passwordMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const { password, confirmPassword } = c.value;

  if (password.pristine || confirmPassword.pristine) return null;

  if (password === confirmPassword) return null;

  return { 'match': true };
}

// alternate validator
// import {FormGroup, Validator} from '@angular/forms';

// export class PasswordMatcher implements Validator {
//   validate(fg: FormGroup): {[key: string]: boolean } | null  {
//     const { password, confirmPassword } = fg.value;

//     if (password === confirmPassword) return null;
//     return { match: true}
//   }
// }
