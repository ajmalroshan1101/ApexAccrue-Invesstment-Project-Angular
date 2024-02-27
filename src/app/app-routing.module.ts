import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpComponent } from './modules/shared/components/otp/otp.component';
import { AuthGuard } from './guards/auth.guard';
import { HomepageComponent } from './modules/shared/components/homepage/homepage.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const CommonRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/shared/shared.module').then((m)=>m.SharedModule)
      
  },
  
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/Users/user.module').then((m) => m.UserModule),
      canActivate:[AuthGuard]
  },
  {
    path: 'company',
    loadChildren: () =>
      import('./modules/CompanyModule/company.module').then(
        (m) => m.CompanyModule),
        canActivate:[AuthGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/AdminModule/admin.module').then((m) => m.AdminModule),
      canActivate:[AuthGuard],
  },
  { path: '**', component: NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(CommonRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
