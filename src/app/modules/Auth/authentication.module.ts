import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UserSignupComponent } from 'src/app/modules/shared/components/UserSignup/usersignup.component';
import { CommonloginComponent } from 'src/app/modules/shared/components/commonlogin/commonlogin.component';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService],
  exports: [],
})
export class AuthenticationModule {}
