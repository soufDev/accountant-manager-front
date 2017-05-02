
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guards/auth/auth.guard';
import {SelectivePreloadingStrategy} from './selective-preloading-strategy';
import {NgModule} from '@angular/core';
import {CanDeactivateGuard} from './guards/auth/can-deactivate-guard.service';
import {RegisterComponent} from './register/register.component';

const appRoutes: Routes = [

  {
    path: '',
    loadChildren: 'app/login/login.module#LoginModule',
    //canLoad: [LoginGuard]
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
      {preloadingStrategy: SelectivePreloadingStrategy}
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
