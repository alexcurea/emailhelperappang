import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NewslettersComponent } from './component/newsletters/newsletters.component';
import { RegisterComponent } from './component/register/register.component';
import { UnitbvhomeComponent } from './component/unitbvhome/unitbvhome.component';
import { AdminGuard } from './guard/adminguard.service';
import { ModGuard } from './guard/modguard.service';

const routes: Routes = [
  { path: 'home', component: UnitbvhomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'newsletter', component: NewslettersComponent, canActivate: [AdminGuard] },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full', 
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
