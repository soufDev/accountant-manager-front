import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing';
import {DashboardComponent} from './dashboard.component';
import {ContentComponent} from './content/content.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {UserBoxComponent} from './header/user-box/user-box.component';
import {NotificationBoxComponent} from './header/notification-box/notification-box.component';
import {MessageBoxComponent} from './header/message-box/message-box.component';
import {HeaderComponent} from './header/header.component';
import {MailboxComponent} from "./content/mailbox/mailbox.component";
import {AddRepresentativeComponent} from "./content/add-representative/add-representative.component";
import {CandidateGuard} from "../guards/profile/candidate.guard";
import {AccountantGuard} from "../guards/profile/accountant.guard";
import {RepresentativeGuard} from "../guards/profile/representative.guard";
import {CollaboratorGuard} from "../guards/profile/collaborator.guard";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,

  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    MessageBoxComponent,
    NotificationBoxComponent,
    UserBoxComponent,
    SideBarComponent,
    ContentComponent,
    MailboxComponent,
    AddRepresentativeComponent
  ],
  providers: [
    CandidateGuard,
    AccountantGuard,
    RepresentativeGuard,
    CollaboratorGuard,
  ]
})

export class DashboardModule {}
