import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from 'src/app/Routes/Authroute/auth-routing.module';
import { UserService } from 'src/app/services/user.service';
import { UserSignupComponent } from 'src/app/shared/UserSignup/usersignup.component';
import { CommonloginComponent } from 'src/app/shared/commonlogin/commonlogin.component';

@NgModule({
  declarations: [UserSignupComponent, CommonloginComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService],
  exports: [],
})
export class AuthenticationModule {}
