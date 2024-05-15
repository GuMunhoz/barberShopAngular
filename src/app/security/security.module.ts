import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin/admin.component';
import { MySchedulesComponent } from './my-schedules/my-schedules.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { AccessDaniedComponent } from './access-danied/access-danied.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    AdminComponent,
    MySchedulesComponent,
    NewPasswordComponent,
    AccessDaniedComponent,
    NotFoundComponent,
    EditProfileComponent,
  ],

  exports: [
    AdminComponent,
    MySchedulesComponent,
    NewPasswordComponent,
    AccessDaniedComponent,
    NotFoundComponent,
    EditProfileComponent
  ],
})
export class SecurityModule {}
