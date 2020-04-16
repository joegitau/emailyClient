import { Component, Input, OnInit } from '@angular/core';

import { EmailService } from '../email.service';
import { Email } from '../email-schema';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.scss']
})
export class EmailReplyComponent implements OnInit {
  @Input() email: Email;

  showModal = false;
  successMsg: string;

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    const { to, from, subject, text } = this.email;

    this.email = {
      ...this.email,
      to: from,
      from: to,
      subject: `RE: ${subject}`,
      text: `\n\n\n ------------------------- \n ${from} wrote: \n\n ${text.replace(/\n/gi, '\n > ')}`
    }
  }

  toggleModal(status: boolean) {
    this.showModal = status;
  }

  onEmailReply(email: Email): void {
    this.emailService.create(email).subscribe(({status}) => {
      this.successMsg = status;

      this.toggleModal(false);
    });
  }

}
