import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { AppComponent } from '../app/app.component';

@Injectable({
  providedIn: 'root',
})
export class AddtaxService {

  constructor(private http: HttpClient, private datepipe: DatePipe) { }
  addtax(taxtype, taxpercent, taxdescription) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.ADDTAX_URL;
    const params = {
        clientId : AppComponent.CLIENT_ID,
        taxtype : taxtype,
        taxpercent : taxpercent,
        taxdescription : taxdescription,
        status : '',
        creation_date : this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss'),
        created_by : localStorage.getItem('userid'),
        updated_by : localStorage.getItem('userid'),
        updation_date : this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss'),
        spa_id : localStorage.getItem('spaid')
    };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
}
}
