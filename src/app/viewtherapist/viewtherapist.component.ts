import { Component, OnInit } from '@angular/core';
import { TherapistService } from '../../services/therapist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewtherapist',
  templateUrl: './viewtherapist.component.html',
  styleUrls: ['./viewtherapist.component.css']
})
export class ViewtherapistComponent implements OnInit {
  name; age; DOB; imagepath; specialist_in;
  therapistDetails: any[] = [];search:string;
  constructor(private therapistservice: TherapistService, private router: Router) { }

  ngOnInit() {
    this.therapistservice.viewtherapists().subscribe(resultData => {
      const therapistresponse = resultData.spa_id;
        // console.log(JSON.stringify(taxresponse));
        if (therapistresponse && typeof therapistresponse === 'object') {
            for (let i = 0; i < therapistresponse.length; i++) {
              this.therapistDetails.push({
                name : therapistresponse[i].name,
                age : therapistresponse[i].age,
                DOB : therapistresponse[i].DOB,
                imagepath : therapistresponse[i].imagepath,
                specialist_in : therapistresponse[i].specialist_in,
                therapistid : therapistresponse[i].therapist_id

                });
            }
          }
        },
        error => {
          alert('error');
  });

}
}
