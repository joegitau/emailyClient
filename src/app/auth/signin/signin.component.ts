import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }

  onSignin() {
    if (this.signinForm.valid) {
      this.authService.signin(this.signinForm.value).subscribe(
        () => this.router.navigateByUrl('/inbox'),
        error => {
          if (error.username || error.password) {
            this.signinForm.setErrors({incorrectCreds: true});
          }
        }
      );
    }
    return;
  }
}
