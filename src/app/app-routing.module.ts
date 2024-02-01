import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const CommonRoutes: Routes = [
  {path:'user',loadChildren:()=> import('./modules/UserModule/user.module').then(m => m.UserModule)},
  {path:'company',loadChildren:()=> import('./modules/CompanyModule/company.module').then(m => m.CompanyModule)},
  {path:'admin',loadChildren:()=> import('./modules/AdminModule/admin.module').then(m => m.AdminModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(CommonRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
