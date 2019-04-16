import { Component, ViewEncapsulation, OnInit, ViewChild, ChangeDetectionStrategy, Output } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { Options } from 'fullcalendar';
import { AppointmentService } from '../../services/appointment.service';
import * as $ from 'jquery';
// import 'fullcalendar';
import { colors } from '../demo-utils/colors';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Time } from '@angular/common';
import { AmazingTimePickerService } from 'amazing-time-picker';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./add-appointment.component.css'],
  // encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush

})
export class AddAppointmentComponent implements OnInit {
  // @Output() show = new EventEmitter<boolean>();
  events: any[] = [];
  checkedtreatment: any[] = [];
  checkedtherapist: any[] = [];
  customerrecord: any[] = [];
  selectedFourHandsTherapists: any[] = [];
  therapistids = [];
  isDisabled = true;  public dateTime1: Date; timeValue; time; date1;
  customid; custname; phone; address; selectcustomer1; selectcustomer; selectallergy; selectnote; selectemail;
  options: any; dialog; customerAll; treatmentAll; therapistAll; appointmentId; appointmentDetailId; interval; idx; treatid;
  showModal = true; scheduledon; starttime; endtime; clientname; mblno; email; allergy; note; procedureplan; therapid; bgcolor;
  selection: any[] = [];
  // date: Date = new Date();
  // this.scheduledon = date;
  // private config = { hour: 7, minute: 15, meriden: 'PM', format: 12 };

  // date1: Date = new Date().getHours();
    datesettings = {
        bigBanner: false,
        timePicker: false,
        format: 'yyyy-MM-dd',
        defaultOpen: false
    };
    timesettings1 = {
      bigBanner: false,
      timePicker: false,
      format: 'hh:mm:ss',
      defaultOpen: false
  };
  timesettings2 = {
    bigBanner: false,
    timePicker: false,
    format: 'hh:mm:ss',
    defaultOpen: false
};
  constructor(private appointmentservice: AppointmentService, private router: Router, private atp:AmazingTimePickerService) { }
  open() {
    const amazingTimePicker1 = this.atp.open();
    amazingTimePicker1.afterClose().subscribe(time => {
     
      this.starttime = time;
      
    });
  }
  end() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
     
      this.endtime = time;
  
    });
  }
  showCalendarEvents() {
    this.appointmentservice.getappointment().subscribe(resultData => {
      const getappointmentresponse = resultData.spa_id;
      // console.log(JSON.stringify(getappointmentresponse));
      this.events = [];
      for (let i = 0; i < getappointmentresponse.length; i++) {
      this.events = [...this.events, {
        'appointmentid': getappointmentresponse[i].appointment_id,
                   'id': getappointmentresponse[i].customer_id,
                'title': getappointmentresponse[i].title,
                'start': getappointmentresponse[i].start,
                'color': getappointmentresponse[i].backgroudcolour,

    }];
    console.log('events' + this.events[i].appointmentid);
  }

    },
    error => {
      alert('error in Getting Appointments...');
    });
  }

  ngOnInit() {
    this.showCalendarEvents();
    this.interval = setInterval(() => {
      this.showCalendarEvents();
    }, 2000);
    // alert('events' + this.showCalendarEvents());
        this.options = {
          // defaultDate: '2017-02-01',
          prev: 'right-single-arrow',
          next: 'right-single-arrow',
          header: {
              left: 'prev,next today',
              center: 'title',
              right: 'month,agendaWeek,agendaDay'
          },
          dateClick: (e) =>  {
    this.showModal = !this.showModal;
            },
        eventClick: function(calEvent, info) {
          // alert(JSON.stringify(this.events));
          // alert((calEvent.title));
          window.location.href = '/viewappointment/' +  calEvent.event.def.extendedProps.appointmentid;

  // this.router.navigateByUrl('viewspa');
},
navLinks: true, // can click day/week names to navigate views
selectable: true,
selectHelper: true,
editable: true,
eventLimit: true, // for all non-agenda views
// views: {
//   agenda: {
//     eventLimit: 6 // adjust to 6 only for agendaWeek/agendaDay
//   }
// },
    };
    this.appointmentservice.getCustomerFullAll().subscribe(resultData => {
      this.customerAll  = resultData.customer_id;
      // alert(JSON.stringify(this.customerAll));
    },
    error => {
      alert('error in Getting Customer Full All...');
    });
    this.appointmentservice.getTreatmentAll().subscribe(resultData => {
      this.treatmentAll = resultData.spa_id;
    },
    error => {
      alert('error in Getting Treatment All...');
    });
    this.appointmentservice.getTherapistAll().subscribe(resultData => {
      this.therapistAll = resultData.spa_id;
      // console.log(JSON.stringify(this.therapistAll));
    },
    error => {
      alert('error in Getting Therapist All...');
    });
    } // ngOnInit Ended
    toggleSelection(treatmentall) {
      console.log(treatmentall.treatment_id);
      const treatmentid: any = document.getElementById(treatmentall.treatment_id);
      if (treatmentid.checked) {
        this.checkedtreatment.push({
          id: treatmentall.treatment_id,
          cost: treatmentall.treatment_unit_cost,
          duration: treatmentall.treatment_duration,
          noOfHands : treatmentall.No_of_hands
        });
        console.log(
          'checkedtreatment' + JSON.stringify(this.checkedtreatment)
        );
      } else {
        console.log(
          'checkedtreatment' + JSON.stringify(this.checkedtreatment)
        );
        this.idx = this.checkedtreatment.indexOf(treatmentall.treatment_id);
        this.checkedtreatment.splice(this.idx, 1);
      }
      this.treatid = treatmentall.treatment_id;
      this.idx = this.selection.indexOf(treatmentall);
      if (this.idx > -1) {
        // is currently selected
        this.selection.splice(this.idx, 1);
      } else {
        // is newly selected
        this.selection.push(treatmentall);
        //     alert(this.selection.length);
      }
    }
    shown(onselectvar) {
       this.customid = onselectvar.customer_id;
       this.custname = onselectvar.display_name;
       this.phone = onselectvar.phone_number;
       this.address = onselectvar.email;

      //  this.selectcustomer = onselectvar.display_name;
       $('#email').val(onselectvar.email);
       this.selectallergy = onselectvar.Allergy;
       this.selectnote = onselectvar.Notes;
       this.selectnote = onselectvar.Notes;
      //  this.selectcustomer1 = onselectvar.phone_number;
    }
  count(onselectvar) {
    this.customerrecord = [];
    this.appointmentservice.getCustomerFullAll().subscribe(resultData => {
      this.customerrecord = resultData.customer_id;
      for (let i = 0; i < this.customerrecord.length; i++) {
        if (onselectvar === 'phone_number') {
          if (
            this.customerrecord[i].phone_number ===
            this.selectcustomer1
          ) {
            //  alert(this.customerrecord[i].phone_number+'name'+this.customerrecord[i].display_name+
            // 'special in'+this.customerrecord[i].email+'allergy'+this.customerrecord[i].Allergy+
            // 'note'+this.customerrecord[i].Notes);
            this.selectcustomer = this.customerrecord[i].display_name;
            this.custname = this.customerrecord[i].display_name;
            $('#email').val(this.customerrecord[i].email);
            this.selectallergy = this.customerrecord[i].Allergy;
            this.selectnote = this.customerrecord[i].Notes;
          }
        }

        if (onselectvar === 'email') {
          if (this.customerrecord[i].email === this.selectemail) {
            //  alert(this.customerrecord[i].phone_number+'name'+this.customerrecord[i].display_name+
            // 'special in'+this.customerrecord[i].email+'allergy'+this.customerrecord[i].Allergy+
            // 'note'+this.customerrecord[i].Notes);
            this.selectcustomer1 =
              this.customerrecord[i].phone_number;
            this.selectcustomer = this.customerrecord[i].display_name;
            this.selectallergy = this.customerrecord[i].Allergy;
            this.selectnote = this.customerrecord[i].Notes;
          }
        }
        if (onselectvar === 'Allergy') {
          if (this.customerrecord[i].Allergy === this.selectallergy) {
            // alert(this.customerrecord[i].phone_number+'name'+this.customerrecord[i].display_name+
            // 'special in'+this.customerrecord[i].email+'allergy'+this.customerrecord[i].Allergy+
            // 'note'+this.customerrecord[i].Notes);
            this.selectcustomer1 =
              this.customerrecord[i].phone_number;
            this.selectcustomer = this.customerrecord[i].display_name;
            $('#email').val(this.customerrecord[i].email);
            this.selectnote = this.customerrecord[i].Notes;
          }
        }
        if (onselectvar === 'Notes') {
          if (this.customerrecord[i].Notes === this.selectnote) {
            //  alert(this.customerrecord[i].phone_number+'name'+this.customerrecord[i].display_name+
            // 'special in'+this.customerrecord[i].email+'allergy'+this.customerrecord[i].Allergy+'note'+
            // this.customerrecord[i].Notes);
            this.selectcustomer1 =
              this.customerrecord[i].phone_number;
            this.selectcustomer = this.customerrecord[i].display_name;
            $('#email').val(this.customerrecord[i].email);
            this.selectallergy = this.customerrecord[i].Allergy;
          }
        }
        if (onselectvar === 'display_name') {
          if (
            this.customerrecord[i].display_name ===
            this.selectcustomer
          ) {
            // alert(this.customerrecord[i].phone_number+'name'+this.customerrecord[i].display_name
            // +'special in'+this.customerrecord[i].email+'allergy'+this.customerrecord[i].Allergy+
            // 'note'+this.customerrecord[i].Notes);
            this.selectcustomer1 =
              this.customerrecord[i].phone_number;
            $('#email').val(this.customerrecord[i].email);
            this.selectallergy = this.customerrecord[i].Allergy;
            this.selectnote = this.customerrecord[i].Notes;
          }
        }
      }
    },
    error => {
      alert('error in Getting Customer Full All...');
    });
  }
    show = function(treatment_id, onselectvar, buttonid) {
      this.therapid = onselectvar.therapist_id;
      this.bgcolor = onselectvar.backgroundcolour;
      document.getElementById(buttonid).innerHTML = onselectvar.name;
      // const onselectvar.name: HTMLElement = document.getElementById(buttonid);


      const item = this.checkedtherapist.find(ele => ele.treatment_id);

      if (item) {
        const index = this.checkedtherapist.findIndex(ele => ele.treatment_id);
        this.checkedtherapist[index].therapist_id = onselectvar.therapist_id;
      } else {
        this.checkedtherapist.push({
          treatment_id: treatment_id,
          therapist_id: onselectvar.therapist_id
        });
      }
    };
    onFourHandsTherapistSelection = function(treatment, therapist, event, buttonid) {
      const item = this.selectedFourHandsTherapists.find(ele => ele.key === treatment.treatment_id);
      const therapists = item ? item.value : [];
      const therapistid: any = document.getElementById(event.target.id);

      if (event.target.checked) {
        if (therapists.length === 2) {
         therapistid.checked = false;
          alert('Select Two Therapists Only.....');
          return;

        }
        therapists.push(therapist);
        // alert(JSON.stringify(therapists));
        // alert(therapists[0].name);

      } else {
        therapists.splice(therapists.findIndex(ele => ele.therapist_id === item.therapist_id), 1);
      }
      const index = this.selectedFourHandsTherapists.findIndex(ele => ele.key === treatment.treatment_id);
      if (index > - 1) {
        this.selectedFourHandsTherapists[index].value = therapists;
      } else {
        this.selectedFourHandsTherapists.push({
          key : treatment.treatment_id,
          value : therapists
        });
      }
      let display_name = '';
      therapists.map(ele => {
        display_name = (display_name).length ? display_name + ', ' : '';
        display_name = display_name + ele.name;
      });
      console.log(display_name);
      document.getElementById(buttonid).innerHTML = display_name ? display_name : 'select';

      // console.log('selectedFourHandsTherapists' + JSON.stringify(this.selectedFourHandsTherapists));
    };
    save() {
      function convertdate(str) {
        // this.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss');
        const date1 = new Date(str),
        mnth = ('0' + (date1.getMonth() + 1)).slice(-2),
        day  = ('0' + date1.getDate()).slice(-2);
        return [ date1.getFullYear(), mnth, day ].join('-');
      }
      this.scheduledon = convertdate(this.scheduledon);
      // alert(this.scheduledon);
      function convertstarttime(str) {
        const date2 = new Date(str),
        hh = ('0' + (date2.getHours())).slice(-2),
        mm  = ('0' + date2.getMinutes()).slice(-2),
        ss  = ('0' + date2.getSeconds()).slice(-2);
        return [ hh, mm, ss ].join(':');
      }
      this.starttime = convertstarttime(this.starttime);
      function convertendtime(str) {
        const date3 = new Date(str),
        hh = ('0' + (date3.getHours())).slice(-2),
        mm  = ('0' + date3.getMinutes()).slice(-2),
        ss  = ('0' + date3.getSeconds()).slice(-2);
        return [ hh, mm, ss ].join(':');
      }
      this.endtime = convertendtime(this.endtime);
      this.appointmentservice.addappointment(this.scheduledon, this.starttime, this.endtime,
         this.customid, this.bgcolor).subscribe(addappointmentresultData => {
       this.appointmentId = addappointmentresultData.appointment_id;
      //  console.log(this.appointmentId);
      for (let i = 0; i < this.checkedtreatment.length; i++) {
        const treatment_id = this.checkedtreatment[i].id;
            let therapist_id = '';
            let therapist_id2 = '';

            if (this.checkedtreatment[i].noOfHands === '4') {
              const therapist = this.selectedFourHandsTherapists.find(ele => ele.key === treatment_id);
              if (therapist) {
                therapist_id = therapist.value[0].therapist_id;
                therapist_id2 = therapist.value[1].therapist_id;
              }
            } else {

              const therapist = this.checkedtherapist.find(ele => ele.treatment_id === treatment_id);
              if (therapist) {
                therapist_id = therapist.therapist_id;
              }
            }
       this.appointmentservice.addAppointmentDetails(this.appointmentId, treatment_id,
         therapist_id, therapist_id2).subscribe(addAppointmentDetailsresultData => {
        this.appointmentDetailId = addAppointmentDetailsresultData.appointment_detail_id;

        this.appointmentservice.addAppointmentLog(this.appointmentDetailId).subscribe(addAppointmentLogresultData => {
        // console.log(JSON.stringify(addAppointmentLogresultData));
        },
        error => {
          alert('error in Adding Appointment Log...');
        });
      },
      error => {
        alert('error in Adding Appointment Details...');
      });
    }
    this.showCalendarEvents();
    this.interval = setInterval(() => {
      this.showCalendarEvents();
    }, 2000);
    this.showModal = !this.showModal;
      },
      error => {
        alert('error in Adding Appointment...');
      });
    }
    closepopup() {
      this.showModal = !this.showModal;
    }
}
