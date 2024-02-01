import { NgModule } from '@angular/core';
import { CompanyLoginComponent } from 'src/app/CompanySide/company-login/company-login.component';
import { CompanySignupComponent } from 'src/app/CompanySide/company-signup/company-signup.component';
import { CompanyRoutingModule } from 'src/app/Routes/CompanyRoute/company-route.module';

@NgModule({
  declarations: [

    CompanySignupComponent,
    CompanyLoginComponent
  ],
  imports: [CompanyRoutingModule],
  exports: [],
})
export class CompanyModule {}
