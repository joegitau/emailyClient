import { AbstractControl } from '@angular/forms';

export function passwordMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const { password, passwordConfirmation } = c.value;

  if (password.pristine || passwordConfirmation.pristine) {
    return null;
  }

  if (password === passwordConfirmation) {
    return null;
  }
  return { match: true };
}

// alternate validator
// import {FormGroup, Validator} from '@angular/forms';

// export class PasswordMatcher implements Validator {
//   validate(fg: FormGroup): {[key: string]: boolean } | null  {
//     const { password, passwordConfirmation } = fg.value;

//     if (password === passwordConfirmation) return null;
//     return { match: true}
//   }
// }
