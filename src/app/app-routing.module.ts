import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { HodDashboardComponent } from './hod-dashboard/hod-dashboard.component';

const routes: Routes = [
  {path : "register", component : RegistrationComponent},
  {path : "login", component : LoginComponent},
  {path : "staff-dash", component : StaffDashboardComponent},
  {path : "hod-dash", component : HodDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
