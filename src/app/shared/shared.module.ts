import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule,} from '@angular/material/toolbar';

import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,


  ],
  exports: [HeaderComponent,FooterComponent]
})
export class SharedModule { }
