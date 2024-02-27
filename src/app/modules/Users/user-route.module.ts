import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserhomeComponent } from 'src/app/modules/Users/components/userhome/userhome.component';
import { PlansComponent } from './components/plans/plans.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { EventsComponent } from './components/events/events.component';

const routes: Routes = [
  { 
    path: 'userhome', 
    component: UserhomeComponent,
    children:[
      {
        path:'plans',
        component:PlansComponent,
      },
      {
        path:'userdashboard',
        component:UserdashboardComponent,
      },
      {
        path:'events',
        component:EventsComponent,
      },
      
    ], 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
