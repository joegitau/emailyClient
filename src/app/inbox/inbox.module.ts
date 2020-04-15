import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailListComponent } from './email-list/email-list.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailPlaceholderComponent } from './email-placeholder/email-placeholder.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    HomeComponent,
    EmailCreateComponent,
    EmailListComponent,
    EmailShowComponent,
    EmailReplyComponent,
    EmailPlaceholderComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    SharedModule
  ]
})
export class InboxModule { }
