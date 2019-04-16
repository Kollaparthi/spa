import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
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
import { AddbillComponent } from './addbill/addbill.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { InvoiceprintComponent } from './invoiceprint/invoiceprint.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { EditappointmentComponent } from './editappointment/editappointment.component';



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '',  component: LoginComponent},
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'addspa',  component: AddspaComponent },
    { path: 'viewspa',  component: ViewspaComponent },
    { path: 'editspa/:id',  component: EditspaComponent },
    { path: 'addtax',  component: AddtaxComponent },
    { path: 'viewtax',  component: ViewtaxComponent },
    { path: 'edittax/:taxid',  component: EdittaxComponent },
    { path: 'addtherapist',  component: AddtherapistComponent },
    { path: 'viewtherapist',  component: ViewtherapistComponent },
    { path: 'edittherapist/:therapid',  component: EdittherapistComponent },
    { path: 'addtreatment',  component: AddtreatmentComponent },
    { path: 'viewtreatment',  component: ViewtreatmentComponent },
    { path: 'edittreatment/:treatmentid',  component: EdittreatmentComponent },
    { path: 'addcustomer',  component: AddcustomerComponent },
    { path: 'addappointment',  component: AddAppointmentComponent },
    { path: 'addbill/:appointmentId',  component: AddbillComponent },
    { path: 'invoice/:appointmentId/:addinvoiceresponse',  component: InvoiceComponent },
    { path: 'viewappointment/:appointmentId',  component: ViewappointmentComponent },

    { path: 'invoiceprint/:appointmentId/:paymentId',  component: InvoiceprintComponent },
    { path: 'viewcustomer',  component: ViewcustomerComponent },
    { path: 'editcustomer/:customerid',  component: EditcustomerComponent },
    { path: 'editappointment/:apptid',  component: EditappointmentComponent },









 ])],
 exports: [RouterModule]
})
export class AppRoutingModule { }
