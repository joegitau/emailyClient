import { Component, OnInit } from '@angular/core';

import { EmailService } from '../email.service';
import { EmailSummary } from '../email-schema';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  emails: EmailSummary[];
  errors: any;

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.emailService.getEmails().subscribe(emails => {
      this.emails = emails,
      error => this.errors = error.message;
    });
  }

}
