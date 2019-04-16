import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { AppComponent } from '../app/app.component';

@Injectable({
  providedIn: 'root',
})
export class AddspaService {

  constructor(private http: HttpClient, private datepipe: DatePipe) { }
  addspa(startTime, endTime, timeInterval, spaName, tagLine
    , mobile, landLine, email, googlePlus, facebook, twitter, addressLine1
    , addressLine2, city, state, country, postalCode, splashScreenPath, spaLogo) {

    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.ADDSPA_URL;
    const params = {
        clientId : AppComponent.CLIENT_ID,
        start_time : startTime + ':00',
        end_time : endTime + ':00',
        time_interval : timeInterval + ':00',
        spa_name : spaName,
        tag_line : tagLine,
        address_line_1 : addressLine1,
        address_line_2 : addressLine2,
        city : city,
        state : state,
        postal_code : postalCode,
        country : country,
        landline : landLine,
        mobile : mobile,
        email : email,
        facebook : facebook,
        twitter : twitter,
        google_plus : googlePlus,
        splash_screen_path : splashScreenPath,
        spa_logo : spaLogo,
        created_by : localStorage.getItem('userid'),
        creation_date : this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss'),
        updated_by : localStorage.getItem('userid'),
        updation_date : this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss')
    };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
}
}
