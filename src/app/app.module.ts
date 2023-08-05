import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HttpHandlerServices } from './shared/services/http-handler.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { HodDashboardComponent } from './hod-dashboard/hod-dashboard.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { leaveService } from './shared/services/leave.service';
import { DashboardCardComponent } from './hod-dashboard/dashboard-card/dashboard-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    StaffDashboardComponent,
    HodDashboardComponent,
    LeaveFormComponent,
    DashboardCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpHandlerServices,
    leaveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
