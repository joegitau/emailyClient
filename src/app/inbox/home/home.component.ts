import { Component, OnInit } from '@angular/core';

import { EmailService } from '../email.service';
import { EmailSummary, Email } from '../email-schema';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  emails: EmailSummary[];
  errors: any;

  constructor(private emailService: EmailService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.emailService.getEmails().subscribe(emails => {
      this.emails = emails,
      error => this.errors = error.message;
    });
  }

}
