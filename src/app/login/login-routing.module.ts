import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {NgModule} from '@angular/core';
import {AuthGuard} from '../guards/auth/auth.guard';
import {AuthService} from '../services/auth.services';

const loginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})

export class LoginRoutingModule {}
