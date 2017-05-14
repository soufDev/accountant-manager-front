import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthGuard} from './guards/auth/auth.guard';
import {AuthService} from './services/auth.services';
import { RegisterComponent } from './register/register.component';
import {UserService} from './services/user.service';
import {ActivateService} from './services/activate.service';
import {ActivateComponent} from './activate/activate.component';
import { ProfileRegisterComponent } from './profile-register/profile-register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {LoginComponent} from './login/login.component';
import { ResetPasswordConfirmComponent } from './reset-password-confirm/reset-password-confirm.component';
import {PasswordForgotService} from './services/password-forgot.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ActivateComponent,
    ProfileRegisterComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    ResetPasswordConfirmComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService,
    ActivateService,
    PasswordForgotService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
