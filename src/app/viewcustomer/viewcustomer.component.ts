import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {
  viewcustomerdetails:any[]=[];search:string;
  constructor(private customerservice: CustomerService) { }

  ngOnInit() {
    this.customerservice.getCustomerfullAll().subscribe(response => {
      var customerresponse=response.customer_id;
      if(customerresponse && typeof customerresponse === "object")
        {
          for(var i=0;i<customerresponse.length;i++)
          {
            this.viewcustomerdetails.push(
              {
                customer_id:customerresponse[i].customer_id,

                name:customerresponse[i].display_name,
                phonenumber:customerresponse[i].phone_number,
                email:customerresponse[i].email,
                referenceby:customerresponse[i].reference_by,
              }
            )
          }
        }

     
    },
    error => {
      alert('error in Adding Customer Contacts...');
    });
  }

}
