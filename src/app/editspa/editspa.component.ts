import { Component, OnInit } from '@angular/core';
import { EditspaService } from './../../services/editspa.service';
 import { Router, ActivatedRoute, ParamMap} from '@angular/router';
 import { AmazingTimePickerService } from 'amazing-time-picker';
 import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-editspa',
  templateUrl: './editspa.component.html',
  styleUrls: ['./editspa.component.css']
})
export class EditspaComponent implements OnInit {
// startTime;
// id: number;
  constructor(private editspaservice: EditspaService, private route: ActivatedRoute, private router: Router, private atp:AmazingTimePickerService, private datepipe: DatePipe) { }
  startTime; endTime; timeInterval; spaName; tagLine; mobile; landLine; email; googlePlus; facebook; twitter; addressLine1; addressLine2;
  city; state; country; postalCode; splashScreenPath; spaLogo;url;url1;
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
 
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event: any) => {
         // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }
  onSelectFile1(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
 
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event: any) => {
         // called once readAsDataURL is completed
        this.url1 = event.target.result;
      }
    }
  }
  // open() {
  //   const amazingTimePicker = this.atp.open();
  //   amazingTimePicker.afterClose().subscribe(time => {
     
  //     this.startTime = time;
      
  //   });
  // }
  // end() {
  //   const amazingTimePicker = this.atp.open();
  //   amazingTimePicker.afterClose().subscribe(time => {
     
  //     this.endTime = time;
  
  //   });
  // }
  // interval() {
  //   const amazingTimePicker = this.atp.open();
  //   amazingTimePicker.afterClose().subscribe(time => {
     
  //     this.timeInterval = time;
  
  //   });
  // }
  ngOnInit() {
         const id = this.route.snapshot.paramMap.get('id');
        //  const id = +id1;
    this.editspaservice.viewspabyId(id).subscribe(resultData => {
            // this.startTime = this.datepipe.transform(new Date(editsparesponse[0].start_time), 'hh:mm:ss');

      const editsparesponse = resultData.spa_id;
      this.startTime = this.datepipe.transform(new Date(editsparesponse[0].start_time), 'hh:mm:ss');
      this.endTime = editsparesponse[0].end_time;
      this.timeInterval = editsparesponse[0].time_interval;
      this.spaName = editsparesponse[0].spa_name;
      this.tagLine = editsparesponse[0].tag_line;
      this.addressLine1 = editsparesponse[0].address_line_1;
      this.addressLine2 = editsparesponse[0].address_line_2;
      this.city = editsparesponse[0].city;
      this.state = editsparesponse[0].state;
      this.postalCode = editsparesponse[0].postal_code;
      this.country = editsparesponse[0].country;
      this.landLine = editsparesponse[0].landline;
      this.mobile = editsparesponse[0].mobile;
      this.facebook = editsparesponse[0].facebook;
      this.email = editsparesponse[0].email;
      this.googlePlus = editsparesponse[0].google_plus;
      this.twitter = editsparesponse[0].twitter;
      // this.splashScreenPath = editsparesponse[0].splash_screen_path;
      // this.spaLogo = editsparesponse[0].spa_logo;
    },
    error => {
      alert('Error while fetching SPA details..');
    });
  }
  update() {
    const id = this.route.snapshot.paramMap.get('id');

    this.editspaservice.editspa(this.startTime, this.endTime, this.timeInterval, this.spaName, this.tagLine
      , this.mobile, this.landLine, this.email, this.googlePlus, this.facebook, this.twitter, this.addressLine1
      , this.addressLine2, this.city, this.state, this.country, this.postalCode, this.splashScreenPath, this.spaLogo,
      id).subscribe(resultData => {
      alert('Successfully Updated...');

  // this.router.navigateByUrl('dashboard');
    },
    error => {
      alert('Incorrect Username or Password');
    });
  }

}
