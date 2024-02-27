import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { CompanyhomeComponent } from "./components/companyhome/companyhome.component";
import { CompanyplansectionComponent } from "./components/companyplansection/companyplansection.component";

const routes:Routes =[
{
    path:'',
    component:CompanyhomeComponent,
    children:[
        {
            path:'plansection',
            component:CompanyplansectionComponent
        }
    ]
},

]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class CompanyRoutingModule{}