import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutWeComponent } from './about-we/about-we.component';
import { BarbersComponent } from './barbers/barbers.component';
import { LocalityComponent } from './locality/locality.component';
import { LoginComponent } from './security/login/login.component';
import { SacComponent } from './sac/sac.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SecurityModule } from './security/security.module';
import { ForgetPasswordComponent } from './security/forget-password/forget-password.component';



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
    SharedModule,
    SecurityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
