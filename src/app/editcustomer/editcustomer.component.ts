import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {
  customerid;firstname;middlename;lastname;password;displayname;gender;dob;notes;allergies;referenceby;
  choosenfile;type;addressline1;addressline2;city;country
  state;phonenumber;email;postalcode;
  constructor(private customerservice: CustomerService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const customerid = this.route.snapshot.paramMap.get('customerid');

    this.customerservice.getCustomer( customerid).subscribe(response => {
      var customeresponse=response.customer_id;
               this.firstname=customeresponse[0].first_name;
               this.middlename=customeresponse[0].middle_name;
               this.lastname=customeresponse[0].last_name;
               this.displayname=customeresponse[0].display_name;
               this.password=customeresponse[0].password;
               this.gender=customeresponse[0].gender;
               this.dob=customeresponse[0].DOB;
               this.notes=customeresponse[0].Notes;
               this.allergies=customeresponse[0].Allergy;
               this.referenceby=customeresponse[0].reference_by;
               this.choosenfile=customeresponse[0].imagepath;
               this.customerservice.getCustomerContacts(customerid).subscribe(response => {
                var customeresponse=response.customer_id;
                var customecontactresponse=response.contact_id;
               this.type=customecontactresponse[0].type;
               this.addressline1=customecontactresponse[0].address_line_1;
               this.addressline2=customecontactresponse[0].address_line_2;
               this.city=customecontactresponse[0].city;
               this.country=customecontactresponse[0].country;
                //this.NoOfHands=customeresponse[0].No_of_hands;
               this.phonenumber=customecontactresponse[0].phone_number;
               this.state=customecontactresponse[0].state;
               this.email=customecontactresponse[0].email;
               this.postalcode=customecontactresponse[0].postal_code;

               var contactid=customecontactresponse[0].contact_id;
              });
    },
    error => {
      alert('error in Adding Customer Contacts...');
    });
    
  }
  update(){
    const customerid = this.route.snapshot.paramMap.get('customerid');

    this.customerservice.editCustomer(customerid,this.choosenfile,this.dob,this.firstname,this.middlename,this.lastname,this.displayname,this.password,this.referenceby,this.gender,this.notes,this.allergies).subscribe(response => {
      alert("update success");
   
},
error => {
alert('error in Adding Customer Contacts...');
});
this.customerservice.editCustomerContacts(customerid, this.phonenumber, this.email, this.type, this.addressline1, this.addressline2, this.city, this.postalcode, this.state, this.country,).subscribe(response => {
  alert("update success");

},
error => {
alert('error in Adding Customer Contacts...');
});
  } 
}
