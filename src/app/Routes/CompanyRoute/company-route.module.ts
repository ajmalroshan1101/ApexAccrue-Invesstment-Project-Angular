import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";

import { CompanyLoginComponent } from "src/app/CompanySide/company-login/company-login.component";
import { CompanySignupComponent } from "src/app/CompanySide/company-signup/company-signup.component";

const routes:Routes =[

    {path:'clogin',component:CompanyLoginComponent},
    {path:'csignup',component:CompanySignupComponent}

]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class CompanyRoutingModule{}