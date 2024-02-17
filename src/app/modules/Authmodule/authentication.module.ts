import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from 'src/app/Routes/Authroute/auth-routing.module';
import { UserSignupComponent } from 'src/app/shared/UserSignup/usersignup.component';
import { UserService } from 'src/app/services/user.service';

@NgModule({
  declarations: [UserSignupComponent],
  imports: [ReactiveFormsModule, CommonModule, AuthRoutingModule],
  providers: [UserService],
  exports: [],
})
export class AuthenticationModule {}
