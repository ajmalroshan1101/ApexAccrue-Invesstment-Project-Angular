import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";

import { AdminLoginComponent } from "src/app/AdminSide/admin-login/admin-login.component";
import { AdminSignupComponent } from "src/app/AdminSide/admin-signup/admin-signup.component";

const routes:Routes =[
    {path:'alogin',component:AdminLoginComponent},
    {path:'asignup',component:AdminSignupComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AdminRoutingModule{}