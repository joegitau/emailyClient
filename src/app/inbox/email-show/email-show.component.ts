import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Email } from '../email-schema';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss']
})
export class EmailShowComponent implements OnInit {
  email: Email;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.paramMap
    //   .pipe(switchMap(params => this.emailService.getEmail(params.get('id'))))
    //   .subscribe(email => this.email = email);

    this.email = this.route.snapshot.data.email; // optional

    this.route.data.subscribe(data => this.email = data.email);
  }

}
