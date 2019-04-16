import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { AppComponent } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  date;
  constructor(private http: HttpClient, private datepipe: DatePipe) { }
  getInvoice(invoice_header_id) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETINVOICE_URL;
    const params = {
        clientId: AppComponent.CLIENT_ID,
        sessionid : AppComponent.SESSION_ID,
        invoice_header_id: invoice_header_id
        };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
}
getAllTax() {
  const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETALLTAX_URL;
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
addReceivable(date, payamount, tax, dueamount, roundedvalue, paymode, invoice_header_id, getinvoicecustomerid) {
  this.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss');

  const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.ADDRECEIVABLE_URL;
  const params = {
    clientId: AppComponent.CLIENT_ID,
    spa_id: localStorage.getItem('spaid'),
    customer_id: getinvoicecustomerid,
    pay_date: date,
    pay_mode: paymode,
    pay_amount: payamount,
    cheque_no: '',
    invoice_header_id: invoice_header_id,
    tax_amount: tax,
    total_amount: dueamount,
    rounded_value: roundedvalue,
    creation_date: this.date,
    created_by: localStorage.getItem('userid'),
    updated_by: localStorage.getItem('userid'),
    updation_date: this.date
      };
  const options = { headers: { 'Content-Type': 'application/json' } };
  return this.http.post(url, params, options).pipe(map((res: any) => {
      return res;
  }));
}
}
