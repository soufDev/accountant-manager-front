import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {AuthGuard} from '../guards/auth/auth.guard';
import {AuthService} from '../services/auth.services';
import {MailboxComponent} from "./content/mailbox/mailbox.component";
import {AddRepresentativeComponent} from "./content/add-representative/add-representative.component";
import {CandidateGuard} from "../guards/profile/candidate.guard";
import {RepresentativeGuard} from "../guards/profile/representative.guard";

const adminRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'depenses',
        loadChildren: 'app/dashboard/content/depenses/depenses.module#DepensesModule',
        canActivate: [RepresentativeGuard]
      },
      {
        path: 'recettes',
        loadChildren: 'app/dashboard/content/recettes/recettes.module#RecettesModule',
        canActivate: [RepresentativeGuard]
      },
      {
        path: 'donators',
        loadChildren: 'app/dashboard/content/donator/donator.module#DonatorModule',
        canActivate: [RepresentativeGuard]
      },
      {
        path: 'mailbox',
        component: MailboxComponent,
        canActivate: [RepresentativeGuard]
      },
      {
        path: 'representative',
        component: AddRepresentativeComponent,
        canActivate: [CandidateGuard]
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
