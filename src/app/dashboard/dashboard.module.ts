import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing';
import {DashboardComponent} from './dashboard.component';
import {ListRecettesComponent} from '../content/list-recettes/list-recettes.component';
import {ListDepensesComponent} from '../content/list-depenses/list-depenses.component';
import {AddRecetteComponent} from '../content/add-recette/add-recette.component';
import {AddDepenseComponent} from '../content/add-depense/add-depense.component';
import {ContentComponent} from '../content/content.component';
import {SideBarComponent} from '../side-bar/side-bar.component';
import {UserBoxComponent} from '../header/user-box/user-box.component';
import {NotificationBoxComponent} from '../header/notification-box/notification-box.component';
import {MessageBoxComponent} from '../header/message-box/message-box.component';
import {HeaderComponent} from '../header/header.component';
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    MessageBoxComponent,
    NotificationBoxComponent,
    UserBoxComponent,
    SideBarComponent,
    ContentComponent,
    AddDepenseComponent,
    AddRecetteComponent,
    ListRecettesComponent,
    ListDepensesComponent,
  ],
  providers: []
})

export class DashboardModule {}
