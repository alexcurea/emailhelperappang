import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelpdeskChatComponent } from './component/helpdesk-chat/helpdesk-chat.component';
import { HelpdeskControlComponent } from './component/helpdesk-control/helpdesk-control.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UnitbvhomeComponent } from './component/unitbvhome/unitbvhome.component';
import { AuthGuard } from './guard/authguard.service';
import { ModGuard } from './guard/modguard.service';

const routes: Routes = [
  { path: 'home', component: UnitbvhomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full', 
  },
  { path: 'helpdesk-chat', component: HelpdeskChatComponent, canActivate: [AuthGuard] },
  { path: 'helpdesk-control', component: HelpdeskControlComponent, canActivate: [ModGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
