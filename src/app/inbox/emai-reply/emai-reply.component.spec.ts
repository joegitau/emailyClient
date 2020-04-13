import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmaiReplyComponent } from './emai-reply.component';

describe('EmaiReplyComponent', () => {
  let component: EmaiReplyComponent;
  let fixture: ComponentFixture<EmaiReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmaiReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmaiReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
