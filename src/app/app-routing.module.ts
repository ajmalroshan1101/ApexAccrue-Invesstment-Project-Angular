import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpComponent } from './shared/otp/otp.component';
import { AuthGuard } from './guards/auth.guard';
import { HomepageComponent } from './shared/homepage/homepage.component';

const CommonRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/Authmodule/authentication.module').then
      ((m) => m.AuthenticationModule),
      
  },
  
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/UserModule/user.module').then((m) => m.UserModule),
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
  { path: 'otp', component: OtpComponent },
  { path: 'homepage' , component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(CommonRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
