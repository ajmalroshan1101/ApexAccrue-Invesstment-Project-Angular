import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";

import { CompanySignupComponent } from "src/app/modules/shared/components/company-signup/company-signup.component";

const routes:Routes =[


]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class CompanyRoutingModule{}