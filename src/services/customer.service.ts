import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { AppComponent } from 'src/app/app.component';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  constructor(private http: HttpClient, private datepipe: DatePipe) { }
  addcustomer1(firstname, middlename, lastname, displayname, password, gender, dob, notes, allergy, referenceby, choosenfile) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.ADDCUSTOMER_URL;
    const params = {
        clientId: AppComponent.CLIENT_ID,
        customer_since: '',
        customer_number: '',
        imagepath: choosenfile,
        DOB: dob,
        first_name: firstname,
        middle_name: middlename,
        last_name: lastname,
        display_name: displayname,
        password: password,
        status: '',
        reference_by: referenceby,
        reference_id: '',
        gender: gender,
        Notes: notes,
        Allergy: allergy,
        membershipcard: '',
        discountper: '',
        billto_id: '',
        created_by: localStorage.getItem('userid'),
        creation_date: this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss'),
        updated_by: localStorage.getItem('userid'),
        updatation_date: this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss'),
        spa_id: localStorage.getItem('spaid')
        };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
}
addcustomer2(addresstype, address_line_1, address_line_2, city, country, phonenumber, state, email, postalcode, customerid) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.ADDCUSTOMERCONTACTS_URL;
    const params = {
        clientId: AppComponent.CLIENT_ID,
        customer_id: customerid,
        phone_number: phonenumber,
        email: email,
        type: addresstype,
        address_line_1: address_line_1,
        address_line_2: address_line_2,
        city: city,
        state: state,
        postal_code: postalcode,
        country: country,
        status: '',
        created_by: localStorage.getItem('userid'),
        creation_date: this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss'),
        updated_by: localStorage.getItem('userid'),
        updatation_date: this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss'),
        spa_id: localStorage.getItem('spaid')
        };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
}
getCustomerfullAll() {
        const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETCUSTOMERFULLALL_URL;
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
getCustomer(customerid) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.GETCUSTOMER_URL;
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
editCustomer(customerid, choosenfile, dob, firstname, middlename, lastname, displayname, password, referenceby, gender, notes, allergies) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.EDITCUSTOMER_URL;
    const params = {

        customer_since: '',
        customer_number: '',
        imagepath: choosenfile,
        DOB: dob,
        first_name: firstname,
        middle_name: middlename,
        last_name: lastname,
        display_name: displayname,
        password: password,
        status: '',
        reference_by: referenceby,
        reference_id: '',
        gender: gender,
        Notes: notes,
        Allergy: allergies,
        membershipcard: '',
        discountper: '',
        billto_id: '',
        created_by: localStorage.getItem('userid'),
        creation_date: this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss'),
        updated_by: localStorage.getItem('userid'),
        updatation_date: this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss'),
        spa_id: localStorage.getItem('spaid'),
        clientId : AppComponent.CLIENT_ID,

        customer_id: customerid
    };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
}
editCustomerContacts(customerid, phonenumber, email, type, addressline1, addressline2, city, postalcode, state, country) {
    const url = AppComponent.SERVER_URL + AppComponent.API_URL + AppComponent.EDITCUSTOMERCONTACTS_URL;
    const params = {
        clientId : AppComponent.CLIENT_ID,
contact_id: customerid,
phone_number: phonenumber,
email: email,
type: type,
address_line_1: addressline1,
address_line_2: addressline2,
city: city,
state: state,
postal_code: postalcode,
country: country,
status: '',
created_by: localStorage.getItem('userid'),
creation_date: this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss'),
updated_by: localStorage.getItem('userid'),
updatation_date: this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss'),
spa_id: localStorage.getItem('spaid'),
        customer_id: customerid
    };
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post(url, params, options).pipe(map((res: any) => {
        return res;
    }));
}

}

