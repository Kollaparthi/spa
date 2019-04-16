import { Component, OnInit } from '@angular/core';
import { AddspaService } from './../../services/addspa.service';
 import { Router} from '@angular/router';
 import { AmazingTimePickerService } from 'amazing-time-picker';

@Component({
  selector: 'app-addspa',
  templateUrl: './addspa.component.html',
  styleUrls: ['./addspa.component.css']
})
export class AddspaComponent implements OnInit {
  startTime; endTime; timeInterval; spaName; tagLine; mobile; landLine; email; googlePlus; facebook; twitter; addressLine1; addressLine2;
   city; state; country; postalCode; splashScreenPath; spaLogo;url;url1; startTime2

  constructor(private addspaservice: AddspaService, private router: Router, private atp:AmazingTimePickerService) { }
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
open() {
  const amazingTimePicker = this.atp.open();
  amazingTimePicker.afterClose().subscribe(time => {
   
    this.startTime = time;
    
  });
}
end() {
  const amazingTimePicker = this.atp.open();
  amazingTimePicker.afterClose().subscribe(time => {
   
    this.endTime = time;

  });
}
interval() {
  const amazingTimePicker = this.atp.open();
  amazingTimePicker.afterClose().subscribe(time => {
   
    this.timeInterval = time;

  });
}
  ngOnInit() {
  }
  save() {
  
    this.addspaservice.addspa(this.startTime, this.endTime, this.timeInterval, this.spaName, this.tagLine
      , this.mobile, this.landLine, this.email, this.googlePlus, this.facebook, this.twitter, this.addressLine1
      , this.addressLine2, this.city, this.state, this.country, this.postalCode, this.splashScreenPath, this.spaLogo
      ).subscribe(resultData => {
      // console.log(JSON.stringify(resultData));
      // alert('1st' + JSON.stringify(resultData));
  this.router.navigateByUrl('viewspa');
    },
    error => {
      alert('error in Adding SPA...');

    });
      }
}
