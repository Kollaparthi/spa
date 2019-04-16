import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { AppComponent } from 'src/app/app.component';

@Injectable({
  providedIn: 'root',
})
export class EdittaxService {
  constructor(private http: HttpClient, private datepipe: DatePipe) { }

  viewtaxbyId(taxid) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETTAX_URL;
    const params = {
        sessionid : AppComponent.SESSION_ID,
        clientId : AppComponent.CLIENT_ID,
        tax_id : taxid
    };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
}
edittax(taxtype, taxpercent, taxdescription, taxid) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.EDITTAX_URL;
    const params = {
        clientId : AppComponent.CLIENT_ID,
        tax_id : taxid,
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
