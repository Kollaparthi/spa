import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { AppComponent } from '../app/app.component';

@Injectable({
  providedIn: 'root',
})
export class ViewtaxService {

  constructor(private http: HttpClient) { }
  viewtax() {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETALLTAX_URL;
    const params = {
        sessionid : AppComponent.SESSION_ID,
        spa_id : localStorage.getItem('spaid'),
        clientId : AppComponent.CLIENT_ID
    };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
}





}

