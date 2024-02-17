import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserhomeComponent } from 'src/app/UserSide/userhome/userhome.component';

const routes: Routes = [{ path: 'userhome', component: UserhomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
