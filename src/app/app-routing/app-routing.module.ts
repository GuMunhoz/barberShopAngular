import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutWeComponent } from '../about-we/about-we.component';
import { BarbersComponent } from '../barbers/barbers.component';
import { HomeComponent } from '../home/home.component';
import { LocalityComponent } from '../locality/locality.component';
import { LoginComponent } from '../security/login/login.component';
import { SacComponent } from '../sac/sac.component';
import { SchedulesComponent } from '../schedules/schedules.component';
import { ForgetPasswordComponent } from '../security/forget-password/forget-password.component';
import { AccessDaniedComponent } from '../security/access-danied/access-danied.component';
import { AdminComponent } from '../security/admin/admin.component';
import { MySchedulesComponent } from '../security/my-schedules/my-schedules.component';
import { NotFoundComponent } from '../security/not-found/not-found.component';
import { NewPasswordComponent } from '../security/new-password/new-password.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutWeComponent },
  { path: 'barbers', component: BarbersComponent },
  { path: 'locality', component: LocalityComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sac', component: SacComponent },
  { path: 'schedules', component: SchedulesComponent },
  { path: 'password', component: ForgetPasswordComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'hours', component: MySchedulesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
