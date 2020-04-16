import { Component, OnInit } from '@angular/core';

import { Email } from '../email-schema';
import { AuthService } from 'src/app/auth/auth.service';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss']
})
export class EmailCreateComponent {
  showModal = false;
  successMsg: string;

  email: Email = {
    id: '',
    subject: '',
    to: '',
    from: `${this.authService.username}@angular-email.com`,
    text: '',
    html: ''
  }

  constructor(private authService: AuthService, private emailService: EmailService) { }

  toggleModal(status: boolean) {
    this.showModal = status;
  }

  onEmailCreate(email: Email) {
    this.emailService.create(email).subscribe(({status}) => {
      this.successMsg = status;

      this.toggleModal(false);
    });
  }
}
