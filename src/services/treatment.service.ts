import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { AppComponent } from '../app/app.component';

@Injectable({
  providedIn: 'root',
})
export class TreatmentService {

  constructor(private http: HttpClient,private datepipe: DatePipe ) { }
  addtreatment(name, treatment_duration, treatment_description, treatment_unit_cost, No_of_hands) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.ADDTREATMENT_URL;
    const params = {
        name : name,
        Item_id : '',
        treatment_duration : treatment_duration,
        treatment_description: treatment_description,
        No_of_hands : No_of_hands,
        imagepath : '',
        treatment_unit_cost : treatment_unit_cost,
        status : '',
        effective_start_date : '',
        effective_end_date : '',
        creation_date : this.datepipe.transform(new Date(),'yyyy-MM-dd hh:mm:ss'),
        created_by : localStorage.getItem('userid'),
        updated_by : localStorage.getItem('userid'),
        updation_date : this.datepipe.transform(new Date(),'yyyy-MM-dd hh:mm:ss'),
        spa_id : localStorage.getItem('spaid'),
        clientId : AppComponent.CLIENT_ID
        };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
}
viewtreatments() {
        const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETALLTREATMENT_URL;
        const params = {
            spa_id : localStorage.getItem('spaid'),
            sessionid : AppComponent.SESSION_ID,
            customer_id: '1',
            clientId : AppComponent.CLIENT_ID
        };
        const options = { headers: { 'Content-Type': 'application/json' } };
        return this.http.post(url, params, options).pipe(map((res: any) => {
            return res;
        }));
}
viewtreatmentbyId(treatmentid) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETTREATMENT_URL;
    const params = {
        treatment_id : treatmentid,
        sessionid : AppComponent.SESSION_ID,
        clientId : AppComponent.CLIENT_ID
    };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
}
edittreatment(name, treatment_duration, treatment_description, treatment_unit_cost, No_of_hands, treatmentid) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.EDITTREATMENT_URL;
    const params = {
        treatment_id : treatmentid,
        clientId : AppComponent.CLIENT_ID,
        name : name,
        Item_id: '',
        treatment_duration: treatment_duration,
        treatment_description: treatment_description,
        No_of_hands: No_of_hands,
        imagepath: '',
        treatment_unit_cost: treatment_unit_cost,
        status: '',
        effective_start_date: '',
        effective_end_date: '',
        creation_date: this.datepipe.transform(new Date(),'yyyy-MM-dd hh:mm:ss'),
        created_by: localStorage.getItem('userid'),
        updated_by: localStorage.getItem('userid'),
        updation_date: this.datepipe.transform(new Date(),'yyyy-MM-dd hh:mm:ss'),
        spa_id: localStorage.getItem('spaid')
    };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
}

}
