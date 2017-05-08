
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guards/auth/auth.guard';
import {SelectivePreloadingStrategy} from './selective-preloading-strategy';
import {NgModule} from '@angular/core';
import {CanDeactivateGuard} from './guards/auth/can-deactivate-guard.service';
import {RegisterComponent} from './register/register.component';
import {ActivateComponent} from './activate/activate.component';
import {AuthService} from './services/auth.services';

const appRoutes: Routes = [

  {
    path: '',
    loadChildren: 'app/login/login.module#LoginModule',
  },
  {
    path: 'activate/:id/:token',
    component: ActivateComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    //canLoad: [LoginGuard]
  },
  {
    path: 'admin',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/admin',
    pathMatch: 'full'
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: true },
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy,
    AuthService
  ]
})
export class AppRoutingModule { }
