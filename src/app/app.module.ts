import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './../services/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddspaComponent } from './addspa/addspa.component';
import { ViewspaComponent } from './viewspa/viewspa.component';
import { EditspaComponent } from './editspa/editspa.component';
import { AddtaxComponent } from './addtax/addtax.component';
import { ViewtaxComponent } from './viewtax/viewtax.component';
import { EdittaxComponent } from './edittax/edittax.component';
import { AddtherapistComponent } from './addtherapist/addtherapist.component';
import { ViewtherapistComponent } from './viewtherapist/viewtherapist.component';
import { EdittherapistComponent } from './edittherapist/edittherapist.component';
import { AddtreatmentComponent } from './addtreatment/addtreatment.component';
import { ViewtreatmentComponent } from './viewtreatment/viewtreatment.component';
import { EdittreatmentComponent } from './edittreatment/edittreatment.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
// import { FullCalendarModule } from 'ng-fullcalendar';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DemoUtilsModule } from './demo-utils/module';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddbillComponent } from './addbill/addbill.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { DatePipe } from '@angular/common';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { InvoiceprintComponent } from './invoiceprint/invoiceprint.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { EditappointmentComponent } from './editappointment/editappointment.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { BsDatepickerModule } from 'ngx-bootstrap';
// import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { AmazingTimePickerModule } from 'amazing-time-picker';

import { SearchPipe } from './search.pipe';
import { TreatmentSearchPipe } from './treatmentsearch.pipe';
import { TherapistSearchPipe } from './therapistsearch.pipe';
import { CustomerSearchPipe } from './customersearch.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddspaComponent,
    ViewspaComponent,
    EditspaComponent,
    AddtaxComponent,
    ViewtaxComponent,
    EdittaxComponent,
    AddtherapistComponent,
    ViewtherapistComponent,
    EdittherapistComponent,
    AddtreatmentComponent,
    ViewtreatmentComponent,
    EdittreatmentComponent,
    AddcustomerComponent,
    AddAppointmentComponent,
    AddbillComponent,
    InvoiceComponent,
    ViewappointmentComponent,
    InvoiceprintComponent,
    ViewcustomerComponent,
    EditcustomerComponent,
    EditappointmentComponent,
    SearchPipe,
    TreatmentSearchPipe,
    TherapistSearchPipe,
    CustomerSearchPipe
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FullCalendarModule,
    AppRoutingModule,
    NgbModule,
    ColorPickerModule,
    BsDatepickerModule.forRoot(),
    AmazingTimePickerModule,

    // CalendarModule.forRoot({
    //   provide: DateAdapter,
    //   useFactory: adapterFactory
    // }),
    DemoUtilsModule
  ],
  exports:[ SearchPipe,TreatmentSearchPipe, TherapistSearchPipe,CustomerSearchPipe],

  providers: [LoginService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
