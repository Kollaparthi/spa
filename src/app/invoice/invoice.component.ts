import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Router, ActivatedRoute} from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  option: string;
  id; taxpercent; DUEAMOUNT; addbill; TAX; getinvoicecustomerid; afterroundedvalue; Cash; appointmentId; invoice_header_id;
  date; payamount; tax; dueamount; roundedvalue; amounttotal; total; paymentid; userselected: any; selectedNav
  existingCoverList = [
    { option: 'Cash' },
    { option: 'Card' },
    { option: 'Nearby' },
    { option: 'Room Post' },
    { option: 'Membership' }
  ];
  constructor(private invoiceservice: InvoiceService, private router: Router, private datepipe:DatePipe,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.appointmentId = this.route.snapshot.paramMap.get('appointmentId');
    this.invoice_header_id = this.route.snapshot.paramMap.get('addinvoiceresponse');


    this.invoiceservice.getInvoice(this.invoice_header_id).subscribe(response => {
     
      var getinvoiceresponse = response.invoice_header_id;

      this.invoiceservice.getAllTax().subscribe(response => {
        var getalltaxresponse = response.spa_id;
        var tax = [];
          for (var m = 0; m < getalltaxresponse.length; m++) {
            this.taxpercent = getalltaxresponse[m].taxpercent;
            console.log(getalltaxresponse);

            this.dueamount = getinvoiceresponse[0].due_amount;
            console.log(this.dueamount);
            this.DUEAMOUNT = getinvoiceresponse[0].due_amount;
        this.TAX = (this.DUEAMOUNT * this.taxpercent) / 100;
        this.TAX += this.TAX;
        // TAX = CGST + SGST;
        this.tax = parseFloat( this.TAX).toFixed(2);
        this.total = parseInt( this.DUEAMOUNT) + parseInt( this.TAX);
        // this.amounttotal = parseInt( this.DUEAMOUNT) + parseInt( this.TAX);
        // $scope.addbill.total=parseFloat(amount-SGST).toFixed(2);
        this.date = this.datepipe.transform(new Date(),'yyyy-MM-dd')
        // afterroundedvalue=(parseInt($scope.addbill.total )-parseInt($scope.addbill.roundedvalue));
        this.amounttotal =  this.afterroundedvalue;
        this.getinvoicecustomerid = getinvoiceresponse[0].customer_id;
        // this.invoiceheaderid = getinvoiceresponse[0].invoice_header_id;


          }     
    
    },
    error => {
    
      alert("Connection Error.Please try again later update");
    });
  },
  error => {
  
    alert("Connection Error.Please try again later update");
  });

  }
 apply() {
  this.invoiceservice.addReceivable(this.date,this.payamount,this.tax,this.dueamount,this.roundedvalue,
    this.selectedNav, this.invoice_header_id, this.getinvoicecustomerid)
  .subscribe(response => {
    this.paymentid = response.payment_id;
this.router.navigate(['/invoiceprint/',this.appointmentId, this.paymentid]);
  },
  error => {
    alert('Incorrect Username or Password');
  });

 }
 getTotalValue() {
  this.afterroundedvalue =
    parseInt(this.total) -
    parseInt(this.roundedvalue || 0);
    this.amounttotal = parseFloat( this.afterroundedvalue).toFixed(2);
}
}
