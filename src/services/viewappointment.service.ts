import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { AppComponent } from '../app/app.component';

@Injectable({
  providedIn: 'root'
})
export class ViewappointmentService {
  viewappointmentservice;checkedoutappoinments;getappontmentdetails
  constructor(private http: HttpClient,private datepipe:DatePipe) { }
  getAppointmentbyId(appointmentId) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETAPPOINTMENTBYID_URL;
    const params = {

        sessionid : AppComponent.SESSION_ID,
        clientId : AppComponent.CLIENT_ID,
         appointment_id: appointmentId,

    };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
}
getCustomer(customer_id) {
  const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETCUSTOMER_URL;
  const params = {

      sessionid : AppComponent.SESSION_ID,
      clientId : AppComponent.CLIENT_ID,
      customer_id: customer_id

  };
  const options = { headers: { 'Content-Type': 'application/json' } };
  return this.http.post(url, params, options).pipe(map((res: any) => {
      return res;
  }));
}
getCustomerContacts(customer_id) {
  const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETCUSTOMERCONTACTS_URL;
  const params = {

      sessionid : AppComponent.SESSION_ID,
      clientId : AppComponent.CLIENT_ID,
      customer_id: customer_id

  };
  const options = { headers: { 'Content-Type': 'application/json' } };
  return this.http.post(url, params, options).pipe(map((res: any) => {
      return res;
  }));
}
getAppointmentDetailsAll(appointmentId) {
  const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETAPPOINTMENTDETAILSALL_URL;
  const params = {
    appointment_id: appointmentId,
      sessionid : AppComponent.SESSION_ID,
      clientId : AppComponent.CLIENT_ID,

  };
  const options = { headers: { 'Content-Type': 'application/json' } };
  return this.http.post(url, params, options).pipe(map((res: any) => {
      return res;
  }));
}
getAppointmentlog(appointdetailid, treatment_description, therapist, therapist2) {
  const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETAPPOINTMENTLOG_URL;
  const params = {
    sessionid: AppComponent.SESSION_ID,
        clientId: AppComponent.CLIENT_ID,
        appointment_detail_id: appointdetailid


  };
  const options = { headers: { 'Content-Type': 'application/json' } };
  return this.http.post(url, params, options).pipe(map((res: any) => {
      return res;
  }));
}
addAppointmentlog(appointment_detail_id,oldstatus, status) {
  const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.ADDAPPOINTMENTLOG_URL;
  const params = {
        clientId: AppComponent.CLIENT_ID,
        appointment_detail_id: appointment_detail_id,
        change_date_time:this.datepipe.transform(new Date(),'yyyy-MM-dd hh:mm:ss'),
        start_time: this.datepipe.transform(new Date(),'yyyy-MM-dd hh:mm:ss'),
        from_time:this.datepipe.transform(new Date(),'yyyy-MM-dd hh:mm:ss'),
        to_time:this.datepipe.transform(new Date(),'yyyy-MM-dd hh:mm:ss'),
        old_status: oldstatus,
        status: status,
        creation_date:this.datepipe.transform(new Date(),'yyyy-MM-dd hh:mm:ss'),
        created_by: localStorage.getItem('userid'),
        updated_by: localStorage.getItem('userid'),
        updation_date:this.datepipe.transform(new Date(),'yyyy-MM-dd hh:mm:ss'),
        spa_id: localStorage.getItem('spaid'),


  };
  const options = { headers: { 'Content-Type': 'application/json' } };
  return this.http.post(url, params, options).pipe(map((res: any) => {
      return res;
  }));
}

}

