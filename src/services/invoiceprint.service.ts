import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { AppComponent } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class InvoiceprintService {

  constructor(private http: HttpClient, private datepipe: DatePipe) { }
  getReceivable(paymentId) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETRECEIVABLE_URL;
    const params = {
        clientId: AppComponent.CLIENT_ID,
        sessionid : AppComponent.SESSION_ID,
        payment_id: paymentId
        };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
}
getInvoice(getinvoiceheaderid) {
  const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETINVOICE_URL;
  const params = {
      clientId: AppComponent.CLIENT_ID,
      sessionid : AppComponent.SESSION_ID,
          invoice_header_id: getinvoiceheaderid
      };
  const options = { headers: { 'Content-Type': 'application/json' } };
  return this.http.post(url, params, options).pipe(map((res: any) => {
      return res;
  }));
}
getCustomer(getinvoicecustomerid) {
  const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETCUSTOMER_URL;
  const params = {
      clientId: AppComponent.CLIENT_ID,
      sessionid : AppComponent.SESSION_ID,
          customer_id: getinvoicecustomerid
      };
  const options = { headers: { 'Content-Type': 'application/json' } };
  return this.http.post(url, params, options).pipe(map((res: any) => {
      return res;
  }));
}
getSpa() {
  const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETSPA_URL;
  const params = {
      clientId: AppComponent.CLIENT_ID,
      sessionid : AppComponent.SESSION_ID,
          spa_id: localStorage.getItem('spaid')
      };
  const options = { headers: { 'Content-Type': 'application/json' } };
  return this.http.post(url, params, options).pipe(map((res: any) => {
      return res;
  }));
}
getAppointmentDetailsAll(getinvoiceappointmentid) {
  const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETAPPOINTMENTDETAILSALL_URL;
  const params = {
      clientId: AppComponent.CLIENT_ID,
      sessionid : AppComponent.SESSION_ID,
    appointment_id: getinvoiceappointmentid
      };
  const options = { headers: { 'Content-Type': 'application/json' } };
  return this.http.post(url, params, options).pipe(map((res: any) => {
      return res;
  }));
}
getInvoicebyappointment(getinvoiceappointmentid) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETINVOICEBYAPPOINTMENT_URL;
    const params = {
        clientId: AppComponent.CLIENT_ID,
        sessionid : AppComponent.SESSION_ID,
         appointment_id: getinvoiceappointmentid
        };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
  }
  getInvoiceLines(getinvoiceheaderid) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETINVOICELINES_URL;
    const params = {
        clientId: AppComponent.CLIENT_ID,
        sessionid : AppComponent.SESSION_ID,
      invoice_header_id: getinvoiceheaderid
        };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
  }
}
