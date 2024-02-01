import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSignupComponent } from 'src/app/AdminSide/admin-signup/admin-signup.component';
import { AdminLoginComponent } from 'src/app/AdminSide/admin-login/admin-login.component';
import { AdminRoutingModule } from 'src/app/Routes/AdminRoute/admin-route.module';



@NgModule({
  declarations: [
    AdminSignupComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
