import { Component, OnInit } from '@angular/core';
import { TreatmentService } from '../../services/treatment.service';

@Component({
  selector: 'app-addtreatment',
  templateUrl: './addtreatment.component.html',
  styleUrls: ['./addtreatment.component.css']
})
export class AddtreatmentComponent implements OnInit {
  name; treatment_duration; treatment_description; treatment_unit_cost; No_of_hands;
  constructor(private treatmentservice: TreatmentService) { }
  ngOnInit() {
  }
  save() {
    this.treatmentservice.addtreatment(this.name, this.treatment_duration, this.treatment_description, this.treatment_unit_cost,
       this.No_of_hands
      ).subscribe(resultData => {
     alert('Treatment Added Successfully...');
   },
   error => {
     alert('error in Adding Treatment...');
   });
  }
}
