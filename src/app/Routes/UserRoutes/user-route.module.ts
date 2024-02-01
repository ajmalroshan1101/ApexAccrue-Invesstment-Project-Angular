import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";

import { UserLoginComponent } from "src/app/UserSide/user-login/user-login.component";
import { UserSignupComponent } from "src/app/UserSide/UserSignup/usersignup.component";

const routes:Routes =[

    {path:'signup',component:UserSignupComponent},
    {path:'login',component:UserLoginComponent}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})


export class UserRoutingModule{}