import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSignupComponent } from 'src/app/shared/UserSignup/usersignup.component';

const routes: Routes = [{
  path:'usersignup', component:UserSignupComponent
  
}]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
