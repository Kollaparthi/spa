import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { AppComponent } from '../app/app.component';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
date;
  constructor(private http: HttpClient, private datepipe: DatePipe) { }
  getappointment() {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETAPPOINTMENT_URL;
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
getAppointmentbyId(appointmentId) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETAPPOINTMENTBYID_URL;
    const params = {
        sessionid : AppComponent.SESSION_ID,
        clientId : AppComponent.CLIENT_ID,
        appointment_id: appointmentId
    };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
  }
  addInvoice(totalCost, grandTotal, appointmentId, customid) {
    this.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss');

    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.ADD_INVOICE_URL;
    const params = {
        clientId: AppComponent.CLIENT_ID,
        invoice_date: this.date,
        invoice_time: this.date,
        customer_id: customid,
        total_amount: totalCost,
        due_amount: grandTotal,
        appointment_id: appointmentId,
        status: '',
        creation_date: this.date,
        created_by: localStorage.getItem('userid'),
        updated_by: localStorage.getItem('userid'),
        updation_date: this.date,
        spa_id: localStorage.getItem('spaid')
    };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
  }
  addInvoiceLines(treatmentid, discount, total, addinvoiceresponse) {
    this.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss');

    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.ADDINVOICELINES_URL;
    const params = {
        clientId: AppComponent.CLIENT_ID,
              invoice_header_id: addinvoiceresponse,
              treatment_id: treatmentid,
              item_id: '',
              Discount: discount,
              amount: total,
              quantity: '',
              mrp: '',
              status: '',
              tax_ID: '',
              tax_ID2: '',
              tax_ID3: '',
              tax_ID4: '',
              tax_ID5: '',
              tax_ID6: '',
              creation_date: this.date,
              created_by: localStorage.getItem('userid'),
              updated_by: localStorage.getItem('userid'),
              updation_date: this.date,
              spa_id: localStorage.getItem('spaid')
    };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
  }
getAppointmentDetails(appointmentId) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETAPPOINTMENTDETAILSALL_URL;
    const params = {
        sessionid : AppComponent.SESSION_ID,
        clientId : AppComponent.CLIENT_ID,
        appointment_id: appointmentId
    };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
  }
getCustomerFullAll() {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETCUSTOMERFULLALL_URL;
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
getTreatmentAll() {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETALLTREATMENT_URL;
    const params = {
        clientId: AppComponent.CLIENT_ID,
        sessionid : AppComponent.SESSION_ID,
        customer_id: '1',
        spa_id: localStorage.getItem('spaid')
        };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
}
getTherapistAll() {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETALLTHERAPIST_URL;
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
addappointment(scheduledon, starttime, endtime, customid, bgcolor) {
    this.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss');
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.ADDAPPOINTMENT_URL;
    const params = {
        appointment_date: scheduledon + ' ' + starttime,
          end_date: scheduledon + ' ' + endtime,
          start_time: scheduledon + ' ' + starttime,
          end_time: scheduledon + ' ' + endtime,
          treatmentcost: '',
          customer_id: customid,
          userid: localStorage.getItem('userid'),
          status: '1',
          created_by: localStorage.getItem('userid'),
          creation_date: this.date,
          updated_by: localStorage.getItem('userid'),
          updatation_date: this.date,
          spa_id: localStorage.getItem('spaid'),
          backgroudcolour: bgcolor,
          clientId: AppComponent.CLIENT_ID
        };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
}
addAppointmentDetails(appointmentId, treatment_id, therapist_id, therapist_id2) {
    this.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss');

    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.ADDAPPOINTMENTDETAILS_URL;
    const params = {
        appointment_id: appointmentId,
              treatment_id: treatment_id,
              therapist_id: therapist_id,
              therapist_id2: therapist_id2,
              therapist_id3: '',
              therapist_id4: '',
              therapist_id5: '',
              therapist_id6: '',
              therapist_id7: '',
              therapist_id8: '',
              start_time: '',
              end_time: '',
              creation_date: this.date,
              created_by: localStorage.getItem('userid'),
              updated_by: localStorage.getItem('userid'),
              updation_date: this.date,
              clientId: AppComponent.CLIENT_ID,
              spa_id: localStorage.getItem('spaid')
        };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
}
addAppointmentLog(appointmentDetailId) {
    this.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss');

    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.ADDAPPOINTMENTLOG_URL;
    const params = {
        appointment_detail_id: appointmentDetailId,
        change_date_time: this.date,
        start_time: this.date,
        from_time: this.date,
        to_time: this.date,
        old_status: '',
        status: 'Appointment',
        creation_date: this.date,
        created_by: localStorage.getItem('userid'),
        updated_by: localStorage.getItem('userid'),
        updation_date: this.date,
        spa_id: localStorage.getItem('spaid'),
        clientId: AppComponent.CLIENT_ID
        };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
}

}
