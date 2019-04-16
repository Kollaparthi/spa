import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  firstname; middlename; lastname; displayname; password; gender; dob; notes; allergy; referenceby; choosenfile;
  addresstype; address_line_1; address_line_2; city; country; phonenumber; state; email; postalcode; customerid;
  constructor(private customerservice: CustomerService) { }

  ngOnInit() {
  }
  save() {
    this.customerservice.addcustomer1(this.firstname, this.middlename, this.lastname, this.displayname,
      this.password, this.gender, this.dob, this.notes, this.allergy, this.referenceby, this.choosenfile
     ).subscribe(resultData => {
       console.log(JSON.stringify(resultData));
       this.customerid = resultData.customer_id;
       console.log(this.customerid);

      this.customerservice.addcustomer2(this.addresstype, this.address_line_1, this.address_line_2, this.city,
        this.country, this.phonenumber, this.state, this.email, this.postalcode, this.customerid).subscribe(resultData2 => {
      alert('Customer Added Successfully...');
    },
    error => {
      alert('error in Adding Customer Contacts...');
    });
  },
  error => {
    alert('error in Adding Customer...');
  });
  }
}
