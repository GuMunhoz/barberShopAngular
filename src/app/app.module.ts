import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutWeComponent } from './about-we/about-we.component';
import { BarbersComponent } from './barbers/barbers.component';
import { LocalityComponent } from './locality/locality.component';
import { LoginComponent } from './login/login.component';
import { SacComponent } from './sac/sac.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutWeComponent,
    BarbersComponent,
    LocalityComponent,
    LoginComponent,
    SacComponent,
    SchedulesComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
