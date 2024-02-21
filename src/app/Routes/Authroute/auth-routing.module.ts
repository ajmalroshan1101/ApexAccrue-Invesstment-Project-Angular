import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSignupComponent } from 'src/app/shared/UserSignup/usersignup.component';
import { CommonloginComponent } from 'src/app/shared/commonlogin/commonlogin.component';

const routes: Routes = [{
  path:'usersignup', component:UserSignupComponent,
  
  
},{path:'userlogin' , component:CommonloginComponent}]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
