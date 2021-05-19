import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnitbvhomeComponent } from './component/unitbvhome/unitbvhome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { UserState } from './state/user.state';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ValidationService } from './service/validation.service';
import { UserService } from './service/users.service';
import { CandidateService } from './service/candidate.service';
import { AlertService } from './service/alert.service';
import { AuthService } from './service/auth.service';
import { TokenStorageService } from './service/token-storage.service';
import { ControlMessagesComponent } from './component/control-messages.component';
import { CandidatesListComponent } from './component/candidates-list/candidates-list.component';
import { EnrollmentsListComponent } from './component/enrollments-list/enrollments-list.component';
import { MessagesListComponent } from './component/messages-list/messages-list.component';
import { UsersListComponent } from './component/users-list/users-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UnitbvhomeComponent,
    LoginComponent,
    RegisterComponent,
    ControlMessagesComponent,
    CandidatesListComponent,
    EnrollmentsListComponent,
    MessagesListComponent,
    UsersListComponent
  ],
  imports: [










  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatNativeDateModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([
    UserState
    ]),
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule,
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [ValidationService, UserService, CandidateService, AlertService, AuthService, TokenStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
