import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Email } from '../email-schema';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  @Input() email: Email;
  @Output() emailSubmit = new EventEmitter();

  emailForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const { to, from, subject, text } = this.email;

    this.emailForm = this.fb.group({
      to: [to, [Validators.required, Validators.email]],
      from: [{ value: from, disabled: true }],
      subject: [subject, [Validators.required]],
      text: [text]
    });
  }

  onSubmit() {
    if (this.emailForm.valid) {
      this.emailSubmit.emit(this.emailForm.value);
    }
    return;
  }
}
