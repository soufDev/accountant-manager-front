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

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ActivateComponent,
    ProfileRegisterComponent,
    NotFoundComponent,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
