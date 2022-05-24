import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutWeComponent } from '../about-we/about-we.component';
import { BarbersComponent } from '../barbers/barbers.component';
import { HomeComponent } from '../home/home.component';
import { LocalityComponent } from '../locality/locality.component';
import { LoginComponent } from '../login/login.component';
import { SacComponent } from '../sac/sac.component';
import { SchedulesComponent } from '../schedules/schedules.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutWeComponent },
  { path: 'barbers', component: BarbersComponent },
  { path: 'locality', component: LocalityComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sac', component: SacComponent },
  { path: 'schedules', component: SchedulesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
