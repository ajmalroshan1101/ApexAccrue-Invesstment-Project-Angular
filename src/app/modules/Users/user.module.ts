import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { UserRoutingModule } from "src/app/modules/Users/user-route.module";
import { UserhomeComponent } from "src/app/modules/Users/components/userhome/userhome.component";
import { UserService } from "src/app/services/user.service";
import { Router, RouterModule } from "@angular/router";


@NgModule({
    declarations:[
        UserhomeComponent
    ],
    imports:[
        UserRoutingModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule
        
    ],
    providers:[UserService],
    exports:[]
})

export class UserModule{
    
}