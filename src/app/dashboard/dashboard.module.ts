import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing';
import {DashboardComponent} from './dashboard.component';
import {ListRecettesComponent} from './content/recettes/list-recettes/list-recettes.component';
import {ListDepensesComponent} from './content/depenses/list-depenses/list-depenses.component';
import {AddRecetteComponent} from './content/recettes/add-recette/add-recette.component';
import {AddDepenseComponent} from './content/depenses/add-depense/add-depense.component';
import {ContentComponent} from './content/content.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {UserBoxComponent} from './header/user-box/user-box.component';
import {NotificationBoxComponent} from './header/notification-box/notification-box.component';
import {MessageBoxComponent} from './header/message-box/message-box.component';
import {HeaderComponent} from './header/header.component';
import {MailboxComponent} from "./content/mailbox/mailbox.component";
import {AddRepresentativeComponent} from "./content/add-representative/add-representative.component";
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
  providers: []
})

export class DashboardModule {}
