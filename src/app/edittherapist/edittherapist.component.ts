import { Component, OnInit } from '@angular/core';
import { TherapistService } from '../../services/therapist.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edittherapist',
  templateUrl: './edittherapist.component.html',
  styleUrls: ['./edittherapist.component.css']
})
export class EdittherapistComponent implements OnInit {

  constructor(private therapistservice: TherapistService, private router: Router, private route: ActivatedRoute) { }
  name; age; dob; specialistIn; backgroundcolour; imagepath; id1; id2; id3;url;url1;url2;url3
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
    const therapid = this.route.snapshot.paramMap.get('therapid');
    this.therapistservice.viewtherapistbyId(therapid).subscribe(resultData => {
      const therapistresponse = resultData.therapist_id;
this.name = therapistresponse[0].name;
this.age = therapistresponse[0].age;
this.dob = therapistresponse[0].DOB;
this.specialistIn = therapistresponse[0].specialist_in;
this.backgroundcolour = therapistresponse[0].backgroundcolour;
this.imagepath = therapistresponse[0].imagepath;
this.id1 = therapistresponse[0].ID1;
this.id2 = therapistresponse[0].ID2;
this.id3 = therapistresponse[0].ID3;


      console.log(JSON.stringify(resultData));
  // this.router.navigateByUrl('viewspa');
    },
    error => {
      alert('error in Viewing TAX...');

    });
  }
  update() {
    const therapid = this.route.snapshot.paramMap.get('therapid');

    this.therapistservice.edittherapist(this.name, this.age, this.dob, this.specialistIn,
      this.backgroundcolour, this.imagepath, this.id1, this.id2, this.id3, therapid).subscribe(resultData => {
      console.log(JSON.stringify(resultData));

alert('Successfully Updated...');

  // this.router.navigateByUrl('viewspa');
    },
    error => {
      alert('error in Editing Therapist...');

    });
  }
}
