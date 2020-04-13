import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmaiReplyComponent } from './emai-reply/emai-reply.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: "full" },
  { path: '/:id', component: EmailShowComponent },
  { path: '/:id/reply', component: EmaiReplyComponent },
  { path: '/create', component: EmailCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
