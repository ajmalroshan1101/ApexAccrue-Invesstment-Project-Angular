import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpComponent } from './components/otp/otp.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { sharedRoutingmodule } from './shared-routing.module';
import { CommonloginComponent } from './components/commonlogin/commonlogin.component';
import { RouterModule } from '@angular/router';
import { UserSignupComponent } from './components/UserSignup/usersignup.component';
import { CompanySignupComponent } from './components/company-signup/company-signup.component';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    OtpComponent,
    HomepageComponent,
    CommonloginComponent,
    UserSignupComponent,
    CompanySignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    sharedRoutingmodule,
    RouterModule,
    ReactiveFormsModule,
    ReactiveFormsModule
  ],
  providers:[SharedService]
})
export class SharedModule {}
