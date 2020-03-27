import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { passwordMatcher } from 'src/app/utils/password-matcher';
import { UniqueUsername } from 'src/app/utils/unique-username';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private uniqueUsername: UniqueUsername) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.minLength(3)], Validators.pattern(/^[a-z0-9]+$/),
        this.uniqueUsername.validate
      ],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(4)]],
        confirmPassword: ['', [Validators.required]]
      }, {validator: passwordMatcher})
    });
  }

  signUp() {
    console.log(this.signUpForm.value);
  }
}
