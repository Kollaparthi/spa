import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { Router, ActivatedRoute} from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-addbill',
  templateUrl: './addbill.component.html',
  styleUrls: ['./addbill.component.css']
})
export class AddbillComponent implements OnInit {
  // discount = 'INR';
  // discountOptions = ['INR', '%'];
  discountOptions = [
    {
    value : 'INR'
  },
  {
    value : '%'
  } ];

  bill: any[] = [];
  total1;

  appointment_id; appointmentstarttime; customid; totalCost; grandTotal; addinvoiceresponse; invoiceheader;
  treatmentid; selectedDiscountOption = 'INR'; appointmentId; discountOption;

  constructor(private appointmentservice: AppointmentService, private datepipe: DatePipe, private router: Router,
    private route: ActivatedRoute) { }

  trackByFn(index, discount) {
    return discount; // or item.id
  }
  ngOnInit() {

    this.appointmentId = this.route.snapshot.paramMap.get('appointmentId');

    this.selectedDiscountOption = 'INR';









    this.appointmentservice.getAppointmentDetails(this.appointmentId).subscribe(response => {




      const appointmentresponse = response.appointment_id;
      this.appointment_id = appointmentresponse[0].appointment_id;
      // this.appointmentstarttime = this.datepipe.transform(new Date(appointmentresponse.start_time),
      //       'yyyy-MM-dd');
      if (appointmentresponse && typeof appointmentresponse === 'object') {
        for (let i = 0; i < appointmentresponse.length; i++) {
          this.bill.push({
            appointmentstarttime: appointmentresponse[i].start_time,
            procedure: appointmentresponse[i].treatment_description,
            cost: appointmentresponse[i].treatment_unit_cost,
            discount: 0,
            total: appointmentresponse[i].treatment_unit_cost,
            therapistName: appointmentresponse[i].therapist1,
            therapistName2: appointmentresponse[i].therapist2,
            treatmentid: appointmentresponse[i].treatment_id
          });
        }
      }

    },
    error => {

      alert('error');
    });


    this.appointmentservice.getAppointmentbyId(this.appointmentId).subscribe(response => {

      const appointmentresponse = response.appointment_id;
      this.customid = appointmentresponse[0].customer_id;
    },
    error => {

      alert('error');
    });

  }
save() {
  this.appointmentservice.addInvoice( this.totalCost, this.grandTotal, this.appointmentId, this.customid).subscribe(response => {

    this.addinvoiceresponse = response.invoice_header_id;
    this.invoiceheader = response.invoice_header_id;

    console.log('Response :' + JSON.stringify(response));

    for (let j = 0; j < this.bill.length; j++) {
      // Add Invoice Lines
const discount = ((this.bill[j].cost) - (this.bill[j].total));
this.appointmentservice.addInvoiceLines(this.bill[j].treatmentid, discount, this.bill[j].total,
  this.addinvoiceresponse).subscribe(response1 => {

  console.log('Response :' + JSON.stringify(response));

},
error => {

  alert('Connection Error.Please try again later update');
});
    }
    this.router.navigate(['/invoice/', this.appointmentId , this.addinvoiceresponse]);

},
  error => {

    alert('error');
  });

}
// selectedDiscountOption(discount){
//   return discount
//     }
getTotalValue (cost, discountValue, discountType) {
  if (discountType === 'INR') {
    return parseFloat(cost) - parseFloat(discountValue || 0);
  } else {
    return (
      parseFloat(cost) -
      parseFloat(cost) * (parseFloat(discountValue || 0) / 100)
    );
  }
}
getTotalValue123(cost, discountValue, discountType, x, discountOption) {
  // alert(discountOption);
  let total = 0
  if (discountType === 'INR') {
    // discountOption = document.getElementById(discountType);

  total  = parseFloat(cost) - parseFloat(discountValue || 0);
  } else {
    // discountOption = document.getElementById(discountType);

  total =
      parseFloat(cost) -
      parseFloat(cost) * (parseFloat(discountValue || 0) / 100);
  }
  x.total = total;
  // document.getElementById(discountOption).innerHTML = discountType;

}
getTotalDetails() {
  let totalCost = 0, i = 0, j = 0;
     let grandTotal = 0;
    let totalDiscount = 0;
    for (j = 0; j < $('.total').length; j++) {
      grandTotal = grandTotal + parseFloat($('.total')[j].innerText);

    }
  for ( i = 0; i < $('.cost').length; i++) {
     totalCost = totalCost + parseFloat($('.cost')[i].innerText);
  }


  totalDiscount = totalCost - grandTotal;
  this.totalCost = totalCost;
  this.grandTotal = grandTotal;
  return {
    totalCost: totalCost,
    grandTotal: grandTotal,
    totalDiscount: totalDiscount
  };
}

}

