import { Component, OnInit } from '@angular/core';
import { TreatmentService } from '../../services/treatment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edittreatment',
  templateUrl: './edittreatment.component.html',
  styleUrls: ['./edittreatment.component.css']
})
export class EdittreatmentComponent implements OnInit {
  name; treatment_duration; treatment_description; treatment_unit_cost; No_of_hands;
  constructor(private treatmentservice: TreatmentService, private route: ActivatedRoute) { }

  ngOnInit() {
    const treatmentid = this.route.snapshot.paramMap.get('treatmentid');
    this.treatmentservice.viewtreatmentbyId(treatmentid).subscribe(resultData => {
      const treatmentresponse = resultData.treatment_id;
this.name = treatmentresponse[0].name;
this.treatment_duration = treatmentresponse[0].treatment_duration;
this.treatment_description = treatmentresponse[0].treatment_description;
this.treatment_unit_cost = treatmentresponse[0].treatment_unit_cost;
this.No_of_hands = treatmentresponse[0].No_of_hands;


    },
    error => {
      alert('error in Viewing TREATMENTS...');

    });
  }
update() {
  const treatmentid = this.route.snapshot.paramMap.get('treatmentid');
    this.treatmentservice.edittreatment(this.name, this.treatment_duration, this.treatment_description,
      this.treatment_unit_cost, this.No_of_hands, treatmentid).subscribe(resultData => {

alert('TREATMENTS Successfully Updated...');

    },
    error => {
      alert('error in Editing TREATMENTS...');

    });
}
}
