import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSignupComponent } from 'src/app/modules/shared/components/UserSignup/usersignup.component';
import { CommonloginComponent } from 'src/app/modules/shared/components/commonlogin/commonlogin.component';
import { OtpComponent } from './components/otp/otp.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CompanySignupComponent } from './components/company-signup/company-signup.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {
    path: 'usersignup',
    component: UserSignupComponent,
  },
  { path: 'otp', component: OtpComponent },
  { path: 'userlogin', component: CommonloginComponent },   
  {path:'csignup',component:CompanySignupComponent}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class sharedRoutingmodule {}
