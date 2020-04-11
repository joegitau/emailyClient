import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { passwordMatcher } from 'src/app/utils/password-matcher';
import { UniqueUsername } from 'src/app/utils/unique-username';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder,
              private uniqueUsername: UniqueUsername,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-z0-9]+$/)],
        [this.uniqueUsername.validate]
      ],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(4)]],
        passwordConfirmation: ['', [Validators.required]]
      }, {validator: passwordMatcher})
    });
  }

  onSignup() {
    if (!this.signUpForm.valid) {
      return;
    }

    const userCreds = {
      username: this.signUpForm.value.username,
      password: this.signUpForm.value.passwordGroup.password,
      passwordConfirmation: this.signUpForm.value.passwordGroup.passwordConfirmation
    }

    this.authService.signup(userCreds).subscribe(
      res => res.username,
      error => {
        if (error.status === 0) {
          this.signUpForm.setErrors({noConnection: true});
        }
        this.signUpForm.setErrors({unknownError: true})
      }
    );
  }
}
