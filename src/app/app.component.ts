import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public static SERVER_URL = 'http://dev.eosinfotech.com/';
  public static API_URL = 'Invention/v1/spa/';

  public static CLIENT_ID = '73gecKXtTSGCW1qsemzn';
  public static SESSION_ID = '1';

  public static LOGIN_URL = 'login';
  public static ADDSPA_URL = 'addSpa';
  public static ADDTAX_URL = 'addTax';
  public static GETTAX_URL = 'getTax';
  public static EDITTAX_URL = 'editTax';
  public static ADDCUSTOMER_URL = 'addCustomer';
  public static ADDCUSTOMERCONTACTS_URL = 'addCustomerContacts';
  public static GETCUSTOMERFULLALL_URL = 'getCustomerfullAll';
  public static GETCUSTOMERCONTACTS_URL = 'getCustomerContacts';
  public static GETCUSTOMER_URL = 'getCustomer';
  public static EDITCUSTOMER_URL = 'editCustomer';
  public static EDITCUSTOMERCONTACTS_URL = 'editCustomerContacts';
  public static GETSPA_URL = 'getSpa';
  public static GETALLSPA_URL = 'getAllSpa';
  public static EDITSPA_URL = 'editSpa';
  public static ADDTHERAPIST_URL = 'addTherapist';
  public static GETTHERAPIST_URL = 'getTherapist';
  public static EDITTHERAPIST_URL ='editTherapist';
  public static ADDTREATMENT_URL = 'addTreatment';
  public static GETTREATMENT_URL = 'getTreatment';
  public static ADDAPPOINTMENT_URL = 'addAppointment';
  public static ADDAPPOINTMENTDETAILS_URL = 'addAppointmentDetails';
  public static ADDAPPOINTMENTLOG_URL = 'addAppointmentlog';
  public static GETAPPOINTMENTLOG_URL = 'getAppointmentlog';

  public static EDITAPPOINTMENT_URL = 'editAppointment';
  public static EDITAPPOINTMENTDETAILS_URL = 'editAppointmentDetails';
  public static GETAPPOINTMENT_URL = 'getAppointment';
  public static GETAPPOINTMENTDETAILSALL_URL = 'getAppointmentDetailsAll';
  public static GETAPPOINTMENTBYID_URL  = 'getAppointmentbyId';
  public static GETALLTREATMENT_URL = 'getAllTreatment';
  public static EDITTREATMENT_URL = 'editTreatment';
  public static GETALLTHERAPIST_URL = 'getAllTherapist';
  public static ADD_INVOICE_URL = 'addInvoice';
  public static GETINVOICE_URL =  'getInvoice';
  public static GETALLTAX_URL = 'getAllTax';
  public static ADDINVOICELINES_URL = 'addInvoiceLines';
  public static GETINVOICELINES_URL ='getInvoiceLines';
  public static ADDRECEIVABLE_URL = 'addReceivable';
  public static GETRECEIVABLE_URL =  'getReceivable';
  public static GETINVOICEBYAPPOINTMENT_URL ='getInvoicebyappointment';

  title = 'samyaaSPA';
}
