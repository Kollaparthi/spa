import { Component, OnInit } from '@angular/core';
import { EditappointmentService } from '../../services/editappointment.service';
//  import { Router} from '@angular/router';
 import { DatePipe } from '@angular/common';
 import { Router, ActivatedRoute } from '@angular/router';
 import { AmazingTimePickerService } from 'amazing-time-picker';

@Component({
  selector: 'app-editappointment',
  templateUrl: './editappointment.component.html',
  styleUrls: ['./editappointment.component.css']
})
export class EditappointmentComponent implements OnInit {
  newtreatment: any[] = []; treatmentAll; customerAll; therapistAll;
  customid; idx; idx1; getAppoinDetails;
  selection: any[] = [];
  select1: any[] = [];
   selection1: any[] = []; therapname; appointmentId; bgcolor;
  onselectvartemp: any[] = [];
  onselectvartemp1: any[] = [];
  onselectvartemp2: any[] = []; treatname; therapid2; addAppointmentDetailId;
  selectedFourHandsTherapists: any[] = []; getAppointmentbyIdresponse; getCustomer; getCustomerContacts;
  getAppointmentDetails; treatmentName; getAllTreatmentDetails; selecttherap: any[] = [];
  newtherapist: any[] = []; appointmentdetails: any[] = []; select: any[] = []; checkedtreatmentForAdd: any[] = [];
  treatments: any[] = []; checkedtherapist: any[] = []; checkedtreatment: any[] = []; thbuttonid; thbuttonid1; thbuttonid2; thbuttonid3;
  customer; scheduledon; starttime; endtime; customerid; custname; note; customerallergy; phonenumber; email;
  treatmentid; therapist_id; therapistid; item; id; cost; treatid; alltherapists: any[] = [];
  customer_id; phone; selectcustomer; selectallergy; selectnote; address; selectcustomer1;
  customerrecord; selectemail; onselectvar; checkedtherapistForAdd: any[] = [];
  treatment_id: any;
  constructor(private  editappointmentservice: EditappointmentService, private router: Router,
    private datepipe: DatePipe, private route: ActivatedRoute,private atp:AmazingTimePickerService) { }
    open() {
      const amazingTimePicker = this.atp.open();
      amazingTimePicker.afterClose().subscribe(time => {
       
        this.starttime = time;
        
      });
    }
    end() {
      const amazingTimePicker = this.atp.open();
      amazingTimePicker.afterClose().subscribe(time => {
       
        this.endtime = time;
    
      });
    }
  ngOnInit() {
    this.appointmentId = this.route.snapshot.paramMap.get('apptid');
    const prev_treatement_id = this.route.snapshot.paramMap.get('treatment_id');

    this.editappointmentservice.getCustomerfullAll().subscribe(response => {
      this.customerAll = response.customer_id;
    },
    error => {
    alert('error in Adding Customer Contacts...');
    });
    this.editappointmentservice.getAllTreatment().subscribe(response => {
      this.treatmentAll = response.spa_id;
},
error => {
alert('error in getAllTreatment...');
});
  this.editappointmentservice.getAllTherapist().subscribe(response => {
    this.therapistAll = response.spa_id;
  },
error => {
alert('error in Adding Customer Contacts...');
});
this.editappointmentservice.getAppointmentbyId(this.appointmentId).subscribe(response1 => {
  this.getAppointmentbyIdresponse = response1.appointment_id;

  this.scheduledon = this.datepipe.transform(new Date(this.getAppointmentbyIdresponse[0].start),
  'yyyy-MM-dd');
this.starttime = this.datepipe.transform(new Date(this.getAppointmentbyIdresponse[0].start_time),
'hh:mm:ss');
this.endtime = this.datepipe.transform(new Date(this.getAppointmentbyIdresponse[0].end_time),
'hh:mm:ss');

const customer_id = this.getAppointmentbyIdresponse[0].customer_id;
this.editappointmentservice.getCustomer(customer_id).subscribe(response2 => {
  this.getCustomer = response2.customer_id[0];
  this.custname = this.getCustomer.display_name;
  this.customer_id = this.getCustomer.customer_id;
  this.selectallergy = this.getCustomer.Allergy;
  this.selectnote = this.getCustomer.Notes;

  this.editappointmentservice.getCustomerContacts(customer_id).subscribe(response3 => {
    this.getCustomerContacts = response3.contact_id;
    this.phone = this.getCustomerContacts
                  ? this.getCustomerContacts[0].phone_number
                  : 0;
   this.selectemail = this.getCustomerContacts
                  ? this.getCustomerContacts[0].email
                  : 0;


                  this.editappointmentservice.getAppointmentDetails(this.appointmentId).subscribe(response4 => {
                    this.getAppointmentDetails = response4.appointment_id;

                    for (let i = 0; i < this.getAppointmentDetails.length; i++) {
                      const treattid = this.getAppointmentDetails[i].treatment_id;
                      const therapiid = this.getAppointmentDetails[i].therapist1;
                      const therapiid2 = this.getAppointmentDetails[i].therapist2;
                      this.therapname = therapiid;
                      const therapId = '55';

                      let noOfhands = 2;

if (treattid === '2419') {
 noOfhands = 4;
}

              this.checkedtreatment.push({
                      id: this.getAppointmentDetails[i].treatment_id,
                      cost: this.getAppointmentDetails[i].treatment_unit_cost,
                 duration: this.getAppointmentDetails[i].treatment_duration,
                noOfHands : noOfhands
                });
              this.checkedtherapist.push({
                     therap_id: therapId
                });

               this.treatid = treattid;
            const item =   this.selection.push({
                member: 'NonMember',
                treatment_id: this.getAppointmentDetails[i].treatment_id,
                name: this.getAppointmentDetails[i].name,
                Item_id: this.getAppointmentDetails[i].Item_id,
                treatment_duration: this.getAppointmentDetails[i].treatment_duration,
                treatment_description: this.getAppointmentDetails[i].treatment_description,
                No_of_hands: noOfhands,
                imagepath: this.getAppointmentDetails[i].imagepath,
                treatment_unit_cost: this.getAppointmentDetails[i].treatment_unit_cost,
                effective_start_date: '',
                effective_end_date: ''
              });
              if (noOfhands === 4) {
                this.selection1.push({
                  treatment_id: this.getAppointmentDetails[i].treatment_id,
                  No_of_hands: noOfhands,
                  name: this.getAppointmentDetails[i].therapist1,
                 name2: ',' + this.getAppointmentDetails[i].therapist2
                });
              } else {
                this.selection1.push({

                  name: this.getAppointmentDetails[i].therapist1,
                });
              }

              // alert(JSON.stringify(this.selection1));
                    } // for Ended
                  },
                  error => {
                  alert('error in Adding Customer Contacts...');
                  });
  },
  error => {
  alert('error in Adding Customer Contacts...');
  });
},
error => {
alert('error in Adding Customer Contacts...');
});

},
error => {
alert('error in Adding Customer Contacts...');
});




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
        // alert(JSON.stringify(this.selection));
  }
}
 toggleSelection1(treatmentall) {
   console.log(treatmentall.treatment_id);
   const treattid: any = document.getElementById(treatmentall.treatment_id);
  if (treattid.checked) {
    this.checkedtreatmentForAdd.push({
      id: treatmentall.treatment_id,
      cost: treatmentall.treatment_unit_cost,
      duration: treatmentall.treatment_duration,
      noOfHands : treatmentall.No_of_hands
    });
    // alert(
    //   'checkedtreatment in toggle' + JSON.stringify(this.checkedtreatmentForAdd)
    // );
  } else {
    // alert(
    //   'checkedtreatment in toggle' + JSON.stringify(this.checkedtreatmentForAdd)
    // );
    this.idx1 = this.checkedtreatmentForAdd.indexOf(treatmentall.treatment_id);
    this.checkedtreatmentForAdd.splice(this.idx1, 1);
  }
  // treatid = id;
  console.log('Index ' + this.select1.indexOf(treatmentall));
  this.idx1 = this.select1.indexOf(treatmentall);
  if (this.idx1 > -1) {
    this.select1.splice(this.idx1, 1);
  } else {
    this.select1.push(treatmentall);
  }
}
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
    // alert(JSON.stringify(this.selectedFourHandsTherapists));
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
onFourHandsTherapistSelection2 (treatment, therapist, event, buttonid) {
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
    // alert(JSON.stringify(this.selectedFourHandsTherapists));
  }
  let display_name = '';
  therapists.map(ele => {
    display_name = (display_name).length ? display_name + ', ' : '';
    display_name = display_name + ele.name;
  });
  console.log(display_name);
  document.getElementById(buttonid).innerHTML = display_name ? display_name : 'select';

  // console.log('selectedFourHandsTherapists' + JSON.stringify(this.selectedFourHandsTherapists));
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
      therap_id: onselectvar.therapist_id
    });
  }
};
treatmentselection (buttonid2) {
  this.thbuttonid2 = buttonid2;
}
therapistselection (therapbuttonid) {
  this.thbuttonid = therapbuttonid;
}
showtherap (treatment_id, onselectvar, buttonid) {
  // alert(JSON.stringify(onselectvar));
  this.onselectvartemp = onselectvar;
  this.checkedtherapist = [];
  this.checkedtherapist.push({
    therap_id: onselectvar.therapist_id
  });
  const idx = this.selecttherap.indexOf(onselectvar);
  if (idx > -1) {
    this.selecttherap.splice(idx, 1);
  } else {
    this.selecttherap.push({
      therap_id: onselectvar.therapist_id

    });
  }
// alert('selecttherap' + JSON.stringify(this.selecttherap));
  document.getElementById(this.thbuttonid).innerHTML = onselectvar.name;
}
showtherap2 (treatment_id, onselectvar, buttonid) {
  this.therapid2 = onselectvar.therapist_id;
      this.bgcolor = onselectvar.backgroundcolour;
      document.getElementById(buttonid).innerHTML = onselectvar.name;
      // const onselectvar.name: HTMLElement = document.getElementById(buttonid);


      const item = this.checkedtherapist.find(ele => ele.treatment_id);

      if (item) {
        const index = this.checkedtherapist.findIndex(ele => ele.treatment_id);
        this.checkedtherapist[index].therapist_id = onselectvar.therapist_id;
      } else {
        this.checkedtherapistForAdd.push({
          treatment_id: treatment_id,
            therapist_id: onselectvar.therapist_id
        });
      }
  // this.onselectvartemp2 = onselectvar;

  //   therapt_id: onselectvar.therapist_id
  // });
  // const idx3 = this.selecttherap.indexOf(onselectvar);
  // if (idx3 > -1) {
  //   this.selecttherap.splice(idx3, 1);
  // } else {
  //   this.selecttherap.push({
  //     therap_id: onselectvar.therapist_id

  //   });
  // }
// alert('selecttherap' + JSON.stringify(this.checkedtherapistForAdd));
  // document.getElementById(this.thbuttonid3).innerHTML = onselectvar.name;
}
show1(onselectvar) {
  this.onselectvartemp1 = onselectvar;
  this.checkedtreatment = [];
  this.checkedtreatment.push({
    id: onselectvar.treatment_id,
    cost: onselectvar.treatment_unit_cost,
    duration: onselectvar.treatment_duration,
    noOfHands : onselectvar.No_of_hands
  });
      console.log('Index' + this.select.indexOf(onselectvar));

      const idx = this.select.indexOf(onselectvar);
      if (idx > -1) {
        this.select.splice(idx, 1);
      } else {
        this.select.push({
          id: onselectvar.treatment_id,
        cost: onselectvar.treatment_unit_cost,
        duration: onselectvar.treatment_duration,
      noOfHands : onselectvar.No_of_hands
        });
      }
  // alert('select' + JSON.stringify(this.select));
  document.getElementById(this.thbuttonid2).innerHTML = onselectvar.name;
}
update() {
  const customerId = this.customid ? this.customid : this.customer_id;
  this.editappointmentservice.editAppointment(this.appointmentId, this.scheduledon, this.starttime,
    this.endtime, customerId).subscribe(response1 => {
console.log('customerid Updated');
    this.editappointmentservice.getAppointmentDetails(this.appointmentId).subscribe(response2 => {
      this.getAppoinDetails = response2.appointment_id;
      this.checkedtreatment = this.select ? this.select : this.checkedtreatment;
      this.checkedtherapist = this.selecttherap ? this.selecttherap : this.checkedtherapist;
      for (let k = 0; k < (this.getAppoinDetails.length) && (this.checkedtreatment.length)
      && (this.checkedtherapist.length); k++) {
        const appointmentdetailid = this.getAppoinDetails[k].appointment_detail_id;
        // alert(this.checkedtreatment[k].id);
        // alert(this.checkedtherapist[k].therap_id);


        this.editappointmentservice.editAppointmentDetails(this.appointmentId, appointmentdetailid,
          this.checkedtreatment[k].id, this.checkedtherapist[k].therap_id).subscribe(response3 => {
          // alert('getAppoinDetails' + JSON.stringify(response3));
          // for (let k = 0; k < this.getAppoinDetails.length; k++) {
          //   let appointmentdetailid = this.getAppoinDetails[k].appointment_detail_id;
          //   alert(appointmentdetailid);

          // }
        },
        error => {
        alert('error in Adding Customer Contacts...');
        });
      }
    },
    error => {
    alert('error in Adding Customer Contacts...');
    });
  },
  error => {
  alert('error in Adding Customer Contacts...');
  });
  for (let i = 0; i < this.checkedtreatmentForAdd.length; i++) {
    const treatment_id = this.checkedtreatmentForAdd[i].id;
        let therapist_id = '';
        let therapist_id2 = '';

        if (this.checkedtreatmentForAdd[i].noOfHands === '4') {
          const therapist = this.selectedFourHandsTherapists.find(ele => ele.key === treatment_id);
          if (therapist) {
            therapist_id = therapist.value[0].therapist_id;
            therapist_id2 = therapist.value[1].therapist_id;
          }
        } else {

          const therapist = this.checkedtherapistForAdd.find(ele => ele.treatment_id === treatment_id);
          if (therapist) {
            therapist_id = therapist.therapist_id;
          }
        }
   this.editappointmentservice.addAppointmentDetails(this.appointmentId, treatment_id,
     therapist_id, therapist_id2).subscribe(addAppointmentDetailsresultData => {
    this.addAppointmentDetailId = addAppointmentDetailsresultData.appointment_detail_id;

    this.editappointmentservice.addAppointmentLog(this.addAppointmentDetailId).subscribe(addAppointmentLogresultData => {
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
}
}
