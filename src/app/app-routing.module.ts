import { SchedulesComponent } from './main/schedules/schedules.component';
import { SacComponent } from './main/sac/sac.component';
import { LoginComponent } from './main/login/login.component';
import { LocalityComponent } from './main/locality/locality.component';
import { BarbersComponent } from './main/barbers/barbers.component';
import { AboutWeComponent } from './main/about-we/about-we.component';
import { HomeComponent } from './main/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
