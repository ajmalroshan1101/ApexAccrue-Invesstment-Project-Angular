import { NgModule } from '@angular/core';
import { CompanyRoutingModule } from 'src/app/modules/CompanyModule/company-route.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompanyhomeComponent } from './components/companyhome/companyhome.component';
import { CompanyheadComponent } from './components/companyhead/companyhead.component';
import { CompanysidebarComponent } from './components/companysidebar/companysidebar.component';
import { CompanyplansectionComponent } from './components/companyplansection/companyplansection.component';
import { Companyserivce } from './services/company.service';

@NgModule({
  declarations: [
    CompanyhomeComponent,
    CompanyheadComponent,
    CompanysidebarComponent,
    CompanyplansectionComponent,
  ],
  imports: [
    CompanyRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
  ],
  exports: [],
  providers:[Companyserivce]
})
export class CompanyModule {}
