import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { AppComponent } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class EditappointmentService {
date;
  constructor(private http: HttpClient, private datepipe: DatePipe) { }
  getAllTreatment() {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETALLTREATMENT_URL;
    const params = {
        sessionid : AppComponent.SESSION_ID,
        clientId : AppComponent.CLIENT_ID,
        spa_id: localStorage.getItem('spaid'),
        customer_id: '1'
    };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
}

getAllTherapist() {
  const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETALLTHERAPIST_URL;
  const params = {
      sessionid : AppComponent.SESSION_ID,
      clientId : AppComponent.CLIENT_ID,
      spa_id: localStorage.getItem('spaid'),
  };
  const options = { headers: { 'Content-Type': 'application/json' } };
  return this.http.post(url, params, options).pipe(map((res: any) => {
      return res;
  }));
}
getCustomerfullAll() {
  const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETCUSTOMERFULLALL_URL;
  const params = {
      sessionid : AppComponent.SESSION_ID,
      clientId : AppComponent.CLIENT_ID,
      spa_id: localStorage.getItem('spaid'),
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
      appointment_id: appointmentId,
  };
  const options = { headers: { 'Content-Type': 'application/json' } };
  return this.http.post(url, params, options).pipe(map((res: any) => {
      return res;
  }));
}
getCustomer(customerid) {
  const url = AppComponent.SERVER_URL  + AppComponent.API_URL + AppComponent.GETCUSTOMER_URL;
  const params = {
      sessionid : AppComponent.SESSION_ID,
      clientId : AppComponent.CLIENT_ID,
      customer_id: customerid
  };
  const options = { headers: { 'Content-Type': 'application/json' } };
  return this.http.post(url, params, options).pipe(map((res: any) => {
      return res;
  }));
}
getCustomerContacts(customerid) {
  const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETCUSTOMERCONTACTS_URL;
  const params = {
      sessionid : AppComponent.SESSION_ID,
      clientId : AppComponent.CLIENT_ID,
      customer_id: customerid
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
getTherapist(therapist_id) {
  const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETTHERAPIST_URL;
  const params = {
      sessionid : AppComponent.SESSION_ID,
      clientId : AppComponent.CLIENT_ID,
      therapist_id: therapist_id,
  };
  const options = { headers: { 'Content-Type': 'application/json' } };
  return this.http.post(url, params, options).pipe(map((res: any) => {
      return res;
  }));
}
getTreatment(treatment_id) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETTREATMENT_URL;
    const params = {
        sessionid : AppComponent.SESSION_ID,
        clientId : AppComponent.CLIENT_ID,
        treatment_id: treatment_id,
    };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
  }
  editAppointment(appointmentId, scheduledon, starttime, endtime, customerId) {
    this.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss');

    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.EDITAPPOINTMENT_URL;
    const params = {
        appointment_date : scheduledon + ' ' + starttime,
        end_date : scheduledon + ' ' + endtime,
        start_time : scheduledon + ' ' + starttime,
        end_time : scheduledon + ' ' + endtime,
        treatmentcost : '',
        customer_id : customerId,
        userid : localStorage.getItem('userid'),
        status : '',
        created_by : localStorage.getItem('userid'),
        creation_date : this.date,
        updated_by: localStorage.getItem('userid'),
        updatation_date : this.date,
        spa_id : localStorage.getItem('spaid'),
        backgroudcolour : '',
        clientId : AppComponent.CLIENT_ID,
        appointment_id : appointmentId
    };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
  }
  editAppointmentDetails(appointmentId, appointment_detail_id, treatment_id, therap_id) {
    this.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss');

    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.EDITAPPOINTMENTDETAILS_URL;
    const params = {
        appointment_detail_id: appointment_detail_id,
                  appointment_id: appointmentId,
                  treatment_id: treatment_id,
                  therapist_id: therap_id,
                  therapist_id2: '',
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
  addAppointmentDetails(appointmentId, treatment_id, therapist_id, therapist_id2) {
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
