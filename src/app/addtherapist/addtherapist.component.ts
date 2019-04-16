import { Component, OnInit } from '@angular/core';
import { TherapistService } from '../../services/therapist.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addtherapist',
  templateUrl: './addtherapist.component.html',
  styleUrls: ['./addtherapist.component.css']
})
export class AddtherapistComponent implements OnInit {
  constructor(private therapistservice: TherapistService, private router: Router,private datepipe: DatePipe) { }
  name; age; dob; specialistIn; backgroundcolour; imagepath; id1; id2; id3;url;url1;url2;url3;
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
  onSelectFile2(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
 
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event: any) => {
         // called once readAsDataURL is completed
        this.url2 = event.target.result;
      }
    }
  }
  onSelectFile3(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
 
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event: any) => {
         // called once readAsDataURL is completed
        this.url3 = event.target.result;
      }
    }
  }
  ngOnInit() {
  }
save() {
  const dob = this.datepipe.transform(new Date(this.dob), 'yyyy-MM-dd');

  this.therapistservice.addtherapist(this.name, this.age, dob, this.specialistIn,
     this.backgroundcolour, this.imagepath, this.id1, this.id2, this.id3).subscribe(resultData => {
    alert('Therapist Added Successfully...');

  },
  error => {
    alert('error in Adding Therapist...');

  });
}
}
