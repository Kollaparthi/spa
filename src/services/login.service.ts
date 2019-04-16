import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { AppComponent } from '../app/app.component';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(username , usersecret) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.LOGIN_URL;
    const params = {
        username : username,
        password : usersecret,
        sessionid : AppComponent.SESSION_ID,
        clientId : AppComponent.CLIENT_ID
    };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
}
}

