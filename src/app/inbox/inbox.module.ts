import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { HomeComponent } from './home/home.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailListComponent } from './email-list/email-list.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailPlaceholderComponent } from './email-placeholder/email-placeholder.component';


@NgModule({
  declarations: [HomeComponent, EmailCreateComponent, EmailListComponent, EmailShowComponent, EmailReplyComponent, EmailPlaceholderComponent],
  imports: [
    CommonModule,
    InboxRoutingModule
  ]
})
export class InboxModule { }
