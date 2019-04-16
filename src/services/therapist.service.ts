import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { AppComponent } from '../app/app.component';

@Injectable({
  providedIn: 'root',
})
export class TherapistService {

  constructor(private http: HttpClient,private datepipe:DatePipe) { }
  addtherapist(name, age, dob, specialistIn, backgroundcolour, imagepath, id1, id2, id3) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.ADDTHERAPIST_URL;
    const params = {
        name : name,
        age : age,
        DOB : dob,
        imagepath : imagepath,
        ID1 : id1,
        ID2 : id2,
        ID3 : id3,
        ID4 : '',
        status : '',
        specialist_in : specialistIn,
        backgroundcolour : backgroundcolour,
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
viewtherapists() {
        const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETALLTHERAPIST_URL;
        const params = {
            spa_id : localStorage.getItem('spaid'),
            sessionid : AppComponent.SESSION_ID,
            clientId : AppComponent.CLIENT_ID
        };
        const options = { headers: { 'Content-Type': 'application/json' } };
        return this.http.post(url, params, options).pipe(map((res: any) => {
            return res;
        }));
}
viewtherapistbyId(therapid) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL +AppComponent.GETTHERAPIST_URL;
    const params = {
        therapist_id : therapid,
        sessionid : AppComponent.SESSION_ID,
        clientId : AppComponent.CLIENT_ID
    };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
}
edittherapist(name, age, dob, specialistIn, backgroundcolour, imagepath, id1, id2, id3, therapid) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.EDITTHERAPIST_URL;
    const params = {
        therapist_id : therapid,
        clientId : AppComponent.CLIENT_ID,
        name : name,
        age: age,
        DOB: dob,
        imagepath: imagepath,
        ID1: id1,
        ID2: id2,
        ID3: id3,
        ID4: '',
        status: '',
        specialist_in: specialistIn,
        backgroundcolour: backgroundcolour,
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

