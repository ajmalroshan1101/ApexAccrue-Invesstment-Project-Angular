import { NgModule } from '@angular/core';
import { CompanyRoutingModule } from 'src/app/modules/CompanyModule/company-route.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CompanyRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
  ],
  exports: [],
})
export class CompanyModule {}
