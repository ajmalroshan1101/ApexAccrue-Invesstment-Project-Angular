import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from 'src/app/modules/AdminModule/admin-route.module';
import { AdminhomepageComponent } from './components/adminhomepage/adminhomepage.component';
import { CompanyrequestComponent } from './components/companyrequest/companyrequest.component';
import { PlanrequestComponent } from './components/planrequest/planrequest.component';
import { EventuploadComponent } from './components/eventupload/eventupload.component';
import { RouterModule } from '@angular/router';
import { AdminheaderComponent } from './components/adminheader/adminheader.component';
import { CompanylistComponent } from './components/companylist/companylist.component';
import { AdminService } from './services/admin.service';

@NgModule({
  declarations: [
    AdminhomepageComponent,
    CompanyrequestComponent,
    PlanrequestComponent,
    EventuploadComponent,
    AdminheaderComponent,
    CompanylistComponent
  ],
  imports: [ 
    CommonModule,
    AdminRoutingModule,
    RouterModule,
  
  ],
  providers:[
    AdminService
  ]
})
export class AdminModule {}
