import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BackgroundComponent } from './main/background/background.component';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './main/login/login.component';
import { AboutWeComponent } from './main/about-we/about-we.component';
import { SchedulesComponent } from './main/schedules/schedules.component';
import { BarbersComponent } from './main/barbers/barbers.component';
import { LocalityComponent } from './main/locality/locality.component';
import { SacComponent } from './main/sac/sac.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    HomeComponent,
    LoginComponent,
    AboutWeComponent,
    SchedulesComponent,
    BarbersComponent,
    LocalityComponent,
    SacComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
