import { Component, OnInit } from '@angular/core';
import { ViewappointmentService } from '../../services/viewappointment.service';
 import { Router, ActivatedRouteSnapshot, ActivatedRoute} from '@angular/router';
 import { DatePipe } from '@angular/common';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent implements OnInit {
  appointment_id; time; clientid; customername;  phonenumber; appointdetailid; fetchInitialAppointmentsLogs;
  viewappointment_treatment: any[] = [];
  viewappointment_therapist: any[] = [];  appointmentId;
  viewappointment: any[] = []; viewappointment1: any[] = []; viewappointment2: any[] = []; appointments;
   checkedoutappoinments;
 viewappointment_therapist_id: any[] = []; oldstatus; appointment_detail_id; date;
 public checkinshow: boolean;
 public engagedshow: boolean;
 public checkoutshow: boolean;
  constructor(private  viewappointmentservice: ViewappointmentService, private router: Router,
    private datepipe: DatePipe, private route: ActivatedRoute) { }

  ngOnInit() {
    this.checkinshow = !this.checkinshow;
    this.engagedshow = !this.engagedshow;
    this.checkoutshow = !this.checkoutshow;

    const appointmentId = this.route.snapshot.paramMap.get('appointmentId');
    this.appointmentId = this.route.snapshot.paramMap.get('appointmentId');
    const paymentId = this.route.snapshot.paramMap.get('paymentId');

    this.viewappointmentservice. getAppointmentbyId(appointmentId).subscribe(response => {
      const viewAppointmentresponse = response.appointment_id;
       this.appointment_id = viewAppointmentresponse[0].appointment_id;
       this.time = viewAppointmentresponse[0].start;
        const customer_id = viewAppointmentresponse[0].customer_id;
        this.viewappointmentservice.getCustomer(customer_id).subscribe(response1 => {
          const viewcustomerresponse = response1.customer_id;
          this.clientid = viewcustomerresponse[0].customer_id;
          this.customername = viewcustomerresponse[0].display_name;
          this.viewappointmentservice.getCustomerContacts(customer_id).subscribe(response2 => {
            const viewcustomercontactresponse = response2.contact_id;
            this.phonenumber =
                  viewcustomercontactresponse[0].phone_number;
          });
        },
        error => {
          alert('Connection Error.Please try again later');
        });
    },
    error => {
      alert('Connection Error.Please try again later');
    });

    this.viewappointmentservice.getAppointmentDetailsAll(appointmentId).subscribe(response => {
      for (let j = 0; j < response.appointment_id.length; j++) {
        const getappontmentdetails = response.appointment_id;
     const appointdetailid = getappontmentdetails[j].appointment_detail_id;
     const treatment_description = response.appointment_id[j].name;
     const therapist = response.appointment_id[j].therapist1;
     const therapist2 = response.appointment_id[j].therapist2;
//        this.viewappointment.push({
//         appointdetailid : getappontmentdetails[j].appointment_detail_id,
//   treatment_description : getappontmentdetails[j].name,
//             therapist   : getappontmentdetails[j].therapist1,
//             therapist2  : getappontmentdetails[j].therapist2,
//             CurrentDate : '00:00:00',
//             CurrentDate2 : '00:00:00',
//             CurrentDate3 : '00:00:00'

//  });
       this.viewappointmentservice.getAppointmentlog(appointdetailid, treatment_description,
        therapist, therapist2).subscribe(response4 => {

         this.checkinshow = false;
         this.engagedshow = true;
         this.checkoutshow = true;
         const AppointmentsLogsresponsearray = response4.appointment_log_id;

         let  checkintime = '00:00:00';
         let  engagedtime = '00:00:00';
         let  checkouttime = '00:00:00';
         let checkinshow = 'checkin';
         let engagedshow = '';
         let checkoutshow = '';

        if (AppointmentsLogsresponsearray.length === 1) {
          this.viewappointment.push({
            appointdetailid : appointdetailid,
      treatment_description : treatment_description,
                therapist   : therapist,
                therapist2  : therapist2,
                CurrentDate : checkintime,
                CurrentDate2 : engagedtime,
                CurrentDate3 : checkouttime,
                checkinshow : checkinshow,
              engagedshow : engagedshow,
              checkoutshow : checkoutshow

     });
        } else if (AppointmentsLogsresponsearray.length === 2) {
          if (AppointmentsLogsresponsearray[1].status === 'CheckIn') {

            checkintime = this.datepipe.transform(new Date(AppointmentsLogsresponsearray[1].from_time),
            'hh:mm:ss');
            checkinshow = '';
            engagedshow = 'Engaged';
          }
          this.viewappointment.push({
            appointdetailid : appointdetailid,
      treatment_description : treatment_description,
                therapist   : therapist,
                therapist2  : therapist2,
                CurrentDate : checkintime,
                CurrentDate2 : engagedtime,
                CurrentDate3 : checkouttime,
                checkinshow : checkinshow,
                engagedshow : engagedshow,
                checkoutshow : checkoutshow

     });
        } else if (AppointmentsLogsresponsearray.length === 3) {
          if (AppointmentsLogsresponsearray[1].status === 'CheckIn') {
            checkintime = this.datepipe.transform(new Date(AppointmentsLogsresponsearray[1].from_time),
            'hh:mm:ss');
            checkinshow = '';
            engagedshow = 'Engaged';
          }
          if (AppointmentsLogsresponsearray[2].status === 'Engaged') {
            engagedtime = this.datepipe.transform(new Date(AppointmentsLogsresponsearray[2].from_time),
            'hh:mm:ss');
            checkinshow = '';
            engagedshow = '';
            checkoutshow = 'check Out';
          }
          this.viewappointment.push({
            appointdetailid : appointdetailid,
      treatment_description : treatment_description,
                therapist   : therapist,
                therapist2  : therapist2,
                CurrentDate : checkintime,
                CurrentDate2 : engagedtime,
                CurrentDate3 : checkouttime,
                checkinshow : checkinshow,
                engagedshow : engagedshow,
                checkoutshow : checkoutshow

     });
        } else if (AppointmentsLogsresponsearray.length === 4) {
          if (AppointmentsLogsresponsearray[1].status === 'CheckIn') {
            checkintime = this.datepipe.transform(new Date(AppointmentsLogsresponsearray[1].from_time),
            'hh:mm:ss');
            checkinshow = '';
            engagedshow = 'Engaged';
          }
          if (AppointmentsLogsresponsearray[2].status === 'Engaged') {
            engagedtime = this.datepipe.transform(new Date(AppointmentsLogsresponsearray[2].from_time),
            'hh:mm:ss');
            checkinshow = '';
            engagedshow = '';
            checkoutshow = 'check Out';
          }
          if (AppointmentsLogsresponsearray[3].status === 'CheckOut') {
            checkouttime = this.datepipe.transform(new Date(AppointmentsLogsresponsearray[3].from_time),
            'hh:mm:ss');
            checkinshow = '';
            engagedshow = '';
            checkoutshow = '';
          }
          this.viewappointment.push({
            appointdetailid : appointdetailid,
            treatment_description : treatment_description,
                      therapist   : therapist,
                      therapist2  : therapist2,
                      CurrentDate : checkintime,
                      CurrentDate2 : engagedtime,
                      CurrentDate3 : checkouttime,
                      checkinshow : checkinshow,
                      engagedshow : engagedshow,
                      checkoutshow : checkoutshow
              });
        }
      },
      error => {
        alert('Connection Error.Please try again later');
      });
  }
},
  error => {
    alert('Connection Error.Please try again later');
  });
  }
 checkin(item) {
  //  this.viewappointment = [];
  //  alert(JSON.stringify(item));
  //  alert(item.checkinshow);
   item.checkinshow = '';
   item.engagedshow = 'Engaged';
   item.checkoutshow = '';

  item.CurrentDate =  this.datepipe.transform(new Date(), 'hh:mm:ss');

  this.oldstatus = 'Appointment';
  status = 'CheckIn';


  this.viewappointmentservice.addAppointmentlog(item.appointdetailid, this.oldstatus, status).subscribe(response => {

},
error => {
  alert('Connection Error.Please try again later');
});

 }
  // Appointment Status : Engaged
  Engaged(item) {
    // alert(JSON.stringify(item));
    item.checkinshow = '';
   item.engagedshow = '';
   item.checkoutshow = 'Check Out';
   item.CurrentDate2 = this.datepipe.transform(new Date(), 'hh:mm:ss');
   this.oldstatus = 'CheckIn';
   status = 'Engaged';


       this.viewappointmentservice.addAppointmentlog(item.appointdetailid, this.oldstatus, status).subscribe(response => {

      },
      error => {
        alert('Connection Error.Please try again later');
      });
  }
  Checkout(item) {
    item.checkinshow = '';
   item.engagedshow = '';
   item.checkoutshow = '';
   item.CurrentDate3 = this.datepipe.transform(new Date(), 'hh:mm:ss');
   this.oldstatus = 'Engaged';
   status = 'CheckOut';


    this.viewappointmentservice.addAppointmentlog(item.appointdetailid, this.oldstatus, status).subscribe(response => {

    },
    error => {
      alert('Connection Error.Please try again later');
    });
  }
  addbillbn()  {

    this.router.navigate(['/addbill/',this.appointmentId]);
}

}
