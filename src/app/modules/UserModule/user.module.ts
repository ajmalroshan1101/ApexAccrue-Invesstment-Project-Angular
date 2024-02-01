import { NgModule } from "@angular/core";
import { UserRoutingModule } from "src/app/Routes/UserRoutes/user-route.module";
import { UserSignupComponent } from "src/app/UserSide/UserSignup/usersignup.component";
import { UserLoginComponent } from "src/app/UserSide/user-login/user-login.component";

@NgModule({
    declarations:[
        UserLoginComponent,
        UserSignupComponent
    ],
    imports:[UserRoutingModule],
    exports:[]
})

export class UserModule{
    
}