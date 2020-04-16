import { Component, OnInit } from '@angular/core';

import { Email } from '../email-schema';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss']
})
export class EmailCreateComponent implements OnInit {
  showModal = false;

  email: Email = {
    id: '',
    subject: '',
    to: '',
    from: `${this.authService.username}@angular-email.com`,
    text: '',
    html: ''
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  toggleModal(status: boolean) {
    this.showModal = status;
  }
}
