import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() controlType = 'input';
  @Input() inputType: string;
  @Input() label: string;
  @Input() placeholder: string;

  constructor() { }

  ngOnInit(): void {
  }
}
