
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guards/auth/auth.guard';
import {SelectivePreloadingStrategy} from './selective-preloading-strategy';
import {NgModule} from '@angular/core';
import {CanDeactivateGuard} from './guards/auth/can-deactivate-guard.service';
import {RegisterComponent} from './register/register.component';
import {ActivateComponent} from './activate/activate.component';
import {AuthService} from './services/auth.services';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {LoginComponent} from './login/login.component';
import {ResetPasswordConfirmComponent} from './reset-password-confirm/reset-password-confirm.component';

const appRoutes: Routes = [

  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'activate/:id/:token',
    component: ActivateComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'password-reset',
    component: ForgotPasswordComponent,
  },
  {
    path: 'password/reset/confirm/:uid/:token',
    component: ResetPasswordConfirmComponent,
    //canLoad: [LoginGuard]
  },
  {
    path: 'admin',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard]
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
      //{ useHash: true }
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
