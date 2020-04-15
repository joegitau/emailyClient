import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailPlaceholderComponent } from './email-placeholder/email-placeholder.component';
import { EmailResolverService } from './email-resolver.service';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: EmailPlaceholderComponent, pathMatch: 'full' },
      { path: 'not-found', component: NotFoundComponent },
      {
        path: ':id',
        resolve: { email: EmailResolverService },
        component: EmailShowComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
