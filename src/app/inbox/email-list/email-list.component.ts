import { Component, OnInit, Input } from '@angular/core';
import { EmailSummary } from '../email-schema';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {
  @Input() email: EmailSummary;

  constructor() { }

  ngOnInit(): void {
  }

}
