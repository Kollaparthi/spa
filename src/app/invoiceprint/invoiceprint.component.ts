import { Component, OnInit } from '@angular/core';
import { InvoiceprintService } from '../../services/invoiceprint.service';
 import { Router, ActivatedRoute} from '@angular/router';
 import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-invoiceprint',
  templateUrl: './invoiceprint.component.html',
  styleUrls: ['./invoiceprint.component.css']
})
export class InvoiceprintComponent implements OnInit {
  id;totalamount;invoiceid;cgst;sgst;roundedvalue;grandtotal;payamount;paymode;balamount;paymentdate;
  invoicedate;totaldiscount;customername;city;state;country;mobile;email;postal_code; appointmentId; paymentId;
  bill1: any[] = []; getinvoiceheaderid; getinvoicecustomerid; getinvoiceappointmentid;
  bill: any[] = []; unitcost;
  constructor(private  invoiceprintService: InvoiceprintService, private router: Router,
    private datepipe:DatePipe, private route: ActivatedRoute) { }
    print(): void {
      let printContents, popupWin;
      printContents = document.getElementById('print-section').innerHTML;
      popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
      popupWin.document.open();
      popupWin.document.write(`
        <html>
          <head>
            <title>Print tab</title>
            <style>
            //........Customized style.......
            </style>
          </head>
      <body onload="window.print();window.close()">${printContents}</body>
        </html>`
      );
      popupWin.document.close();
  }
  ngOnInit() {
    this.appointmentId = this.route.snapshot.paramMap.get('appointmentId');
    this.paymentId = this.route.snapshot.paramMap.get('paymentId');
    this.invoiceprintService.getReceivable(this.paymentId).subscribe( response => {
      var getrecievableresponse = response.payment_id;
      this.getinvoiceheaderid = getrecievableresponse[0].invoice_header_id;
        this.totalamount = getrecievableresponse[0].total_amount;
        this.invoiceid = getrecievableresponse[0].invoice_header_id;
        var gst = getrecievableresponse[0].tax_amount;
        this.cgst = gst / 2;
        this.sgst = gst / 2;
        this.roundedvalue = getrecievableresponse[0].rounded_value;
        this.grandtotal = parseInt(this.totalamount) + parseInt(gst);
        this.payamount = getrecievableresponse[0].pay_amount;
        this.paymode = getrecievableresponse[0].pay_mode;
        this.balamount =
          parseInt(this.grandtotal) -
          (parseInt(this.payamount) + parseInt(this.roundedvalue));
          this.paymentdate = getrecievableresponse[0].pay_date;
          this. invoiceprintService.getInvoice(this.getinvoiceheaderid).subscribe( response => {
            var getinvoiceresponse = response.invoice_header_id;
            this.getinvoicecustomerid = getinvoiceresponse[0].customer_id;
            this.getinvoiceappointmentid = getinvoiceresponse[0].appointment_id;
            this.getinvoiceheaderid = getinvoiceresponse[0].invoice_header_id;
            this.invoicedate = getinvoiceresponse[0].invoice_date;
            var totalamountbyinvoice = getinvoiceresponse[0].total_amount;
            var dueamountbyinvoice = getinvoiceresponse[0].due_amount;
            this.totaldiscount = totalamountbyinvoice - dueamountbyinvoice;
            this. invoiceprintService.getCustomer(this.getinvoicecustomerid).subscribe( response => {
              var getcustomerresponse = response.customer_id;
              this.customername = getcustomerresponse[0].display_name;
              this. invoiceprintService.getSpa().subscribe( response => {
                var getsparesponse = response.spa_id;
                this. city = getsparesponse[0].city;
                this. state = getsparesponse[0].state;
                this. country = getsparesponse[0].country;
                this. mobile = getsparesponse[0].mobile;
                this. email = getsparesponse[0].email;
                this. postal_code = getsparesponse[0].postal_code;
                this.invoiceprintService.getAppointmentDetailsAll(this.getinvoiceappointmentid).subscribe( response => {
                  var appointmentresponse = response.appointment_id;
                  if (
                    appointmentresponse &&
                    typeof appointmentresponse === "object"
                  ) {
                    for (
                      let i = 0;
                      i < appointmentresponse.length;
                      i++
                    ) {
                     let unitcost = appointmentresponse[i].treatment_unit_cost;
                      // this.bill.push({
                      //   cost: appointmentresponse[i].treatment_unit_cost,
                      //   // discount:200,
                      //   // amount:2597
                      //   // discount:0,
                      //   // total:appointmentresponse[i].treatment_unit_cost,
                      //   // therapistName:appointmentresponse[i].therapist1,
                      //   // treatmentid:appointmentresponse[i].treatment_id
                      // });
                   
                  this. invoiceprintService.getInvoicebyappointment(this.getinvoiceappointmentid).subscribe( response => {
                   
                    var getinvoicebyappointmentresponse =
                    response.invoice_header_id;
                  var invoicebyappointmentheaderid =
                    getinvoicebyappointmentresponse[0]
                      .invoice_header_id;
                  this. invoiceprintService.getInvoiceLines(this.getinvoiceheaderid).subscribe( response => {
                 
                    var getinvoicelinesresponse =
                    response.invoice_line_id;
                  var headerid =
                    getinvoicelinesresponse[0].invoice_header_id;
                  // $scope.discount=getinvoicelinesresponse[0].Discount;
                  // $scope.amount=getinvoicelinesresponse[0].amount;
                  if (
                    getinvoicelinesresponse &&
                    typeof getinvoicelinesresponse === "object"
                  ) {
                    // for (var k = 0; k < headerid.length; k++) {
                      this.bill.push({
                      cost: appointmentresponse[i].treatment_unit_cost,
                        discount:
                          getinvoicelinesresponse[i].Discount,
                        amount: getinvoicelinesresponse[i].amount
                      });
                    // }
                  }
                  this. invoiceprintService.getInvoice(this.getinvoiceheaderid).subscribe( response => {
                    console.log(JSON.stringify( response));
                    response.invoice_header_id;
                    this.totalamount =
                      getinvoiceresponse[0].total_amount;
                  

                  });
                  });
                  });
               

                }
              }

                });

              });
             
            });
           
          });
         
         
    },
    error => {
      alert('Incorrect Username or Password');
    });
  }

}
