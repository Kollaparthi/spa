import { Component, OnInit } from '@angular/core';
import { TreatmentService } from '../../services/treatment.service';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customerEmailFilter'
})
@Component({
  selector: 'app-viewtreatment',
  templateUrl: './viewtreatment.component.html',
  styleUrls: ['./viewtreatment.component.css']
})
export class ViewtreatmentComponent implements OnInit {
  viewtreatment: any[] = [];search:string;

  constructor(private treatmentservice: TreatmentService) { }

  ngOnInit() {
    this.treatmentservice.viewtreatments().subscribe(resultData => {
      const treatmentresponse = resultData.spa_id;
        // console.log(JSON.stringify(taxresponse));
        if (treatmentresponse && typeof treatmentresponse === 'object') {
            for (let i = 0; i < treatmentresponse.length; i++) {
              this.viewtreatment.push({
                procedurename : treatmentresponse[i].name,
                duration : treatmentresponse[i].treatment_duration,
                description : treatmentresponse[i].treatment_description,
                cost : treatmentresponse[i].treatment_unit_cost,
                noofhands : treatmentresponse[i].No_of_hands,
                treatment_id: treatmentresponse[i].treatment_id,


                });
            }
          }
        },
        error => {
          alert('error');
  });
  }

}
