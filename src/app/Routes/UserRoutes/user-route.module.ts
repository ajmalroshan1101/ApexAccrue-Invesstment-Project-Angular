import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";

import { UserLoginComponent } from "src/app/UserSide/user-login/user-login.component";
import { UserhomeComponent } from "src/app/UserSide/userhome/userhome.component";
import { UserSignupComponent } from "src/app/UserSide/UserSignup/usersignup.component";

const routes:Routes =[

    {path:'signup',component:UserSignupComponent},
    {path:'login',component:UserLoginComponent},
    {path:'userhome',component:UserhomeComponent}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})


export class UserRoutingModule{}