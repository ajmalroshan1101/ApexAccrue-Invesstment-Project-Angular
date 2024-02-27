import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { UserRoutingModule } from "src/app/modules/Users/user-route.module";
import { UserhomeComponent } from "src/app/modules/Users/components/userhome/userhome.component";
import { UserService } from "src/app/services/user.service";
import { Router, RouterModule } from "@angular/router";
import { EventsComponent } from "./components/events/events.component";
import { PlansComponent } from "./components/plans/plans.component";
import { UserheaderComponent } from "./components/userheader/userheader.component";
import { UserdashboardComponent } from "./components/userdashboard/userdashboard.component";


@NgModule({
    declarations:[
        UserhomeComponent,
        EventsComponent,
        PlansComponent,
        UserheaderComponent,
        UserdashboardComponent
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