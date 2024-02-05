import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { UserRoutingModule } from "src/app/Routes/UserRoutes/user-route.module";
import { UserSignupComponent } from "src/app/UserSide/UserSignup/usersignup.component";
import { UserLoginComponent } from "src/app/UserSide/user-login/user-login.component";
import { UserService } from "src/app/services/user.service";


@NgModule({
    declarations:[
        UserLoginComponent,
        UserSignupComponent
    ],
    imports:[
        UserRoutingModule,
        ReactiveFormsModule,
        CommonModule
        
    ],
    providers:[UserService],
    exports:[]
})

export class UserModule{
    
}