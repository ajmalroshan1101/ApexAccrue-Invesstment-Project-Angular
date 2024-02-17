import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { UserRoutingModule } from "src/app/Routes/UserRoutes/user-route.module";
import { UserhomeComponent } from "src/app/UserSide/userhome/userhome.component";
import { UserService } from "src/app/services/user.service";


@NgModule({
    declarations:[
        UserhomeComponent
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