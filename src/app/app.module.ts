import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnitbvhomeComponent } from './component/unitbvhome/unitbvhome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material-module';

import { ValidationService } from './service/validation.service';
import { UserService } from './service/users.service';
import { CandidateService } from './service/candidate.service';
import { AuthService } from './service/auth.service';
import { TokenStorageService } from './service/token-storage.service';
import { ControlMessagesComponent } from './component/control-messages.component';
import { authInterceptorProviders } from './helpers/auth-interceptor';
import { NewslettersComponent } from './component/newsletters/newsletters.component';
import { NewsletterService } from './service/newsletter.service';


@NgModule({
  declarations: [
    AppComponent,
    UnitbvhomeComponent,
    LoginComponent,
    RegisterComponent,
    ControlMessagesComponent,
    NewslettersComponent
  ],
  imports: [
    MaterialModule,
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ValidationService, UserService, CandidateService, AuthService, TokenStorageService, authInterceptorProviders, NewsletterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
