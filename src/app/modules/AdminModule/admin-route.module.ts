import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomepageComponent } from './components/adminhomepage/adminhomepage.component';
import { CompanyrequestComponent } from './components/companyrequest/companyrequest.component';
import { PlanrequestComponent } from './components/planrequest/planrequest.component';
import { EventuploadComponent } from './components/eventupload/eventupload.component';
import { CompanylistComponent } from './components/companylist/companylist.component';

const routes: Routes = [
  {
    path: 'adminhome',
    component: AdminhomepageComponent,
    children: [
      {
        path: 'company-request',
        component: CompanyrequestComponent,
        // outlet: 'adminOutlet',
      },
      {
        path: 'plan-request',
        component: PlanrequestComponent,
        // outlet: 'adminOutlet',
      },
      {
        path: 'event-upload',
        component: EventuploadComponent,
        // outlet: 'adminOutlet',
      },
      {
        path: 'companylist',
        component: CompanylistComponent,
        // outlet: 'adminOutlet',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
