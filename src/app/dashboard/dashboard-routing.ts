import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {AuthGuard} from '../guards/auth/auth.guard';
import {AuthService} from '../services/auth.services';
import {MailboxComponent} from "./content/mailbox/mailbox.component";
import {AddRepresentativeComponent} from "./content/add-representative/add-representative.component";

const adminRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'depenses',
        loadChildren: 'app/dashboard/content/depenses/depenses.module#DepensesModule'
      },
      {
        path: 'recettes',
        loadChildren: 'app/dashboard/content/recettes/recettes.module#RecettesModule'
      },
      {
        path: 'donators',
        loadChildren: 'app/dashboard/content/donator/donator.module#DonatorModule'
      },
      {
        path: 'mailbox',
        component: MailboxComponent
      },
      {
        path: 'representative',
        component: AddRepresentativeComponent
      },
    ]
  },

];
@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    AuthService,
  ]
})

export class DashboardRoutingModule {}
