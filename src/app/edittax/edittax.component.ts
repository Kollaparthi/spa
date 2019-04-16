import { Component, OnInit } from '@angular/core';
import { EdittaxService } from '../../services/edittax.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edittax',
  templateUrl: './edittax.component.html',
  styleUrls: ['./edittax.component.css']
})
export class EdittaxComponent implements OnInit {
  taxtype; taxpercent; taxdescription;
  constructor(private edittaxservice: EdittaxService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const taxid = this.route.snapshot.paramMap.get('taxid');
    this.edittaxservice.viewtaxbyId(taxid).subscribe(resultData => {
      const edittaxresponse = resultData.tax_id;
this.taxtype = edittaxresponse[0].taxtype;
this.taxpercent = edittaxresponse[0].taxpercent;
this.taxdescription = edittaxresponse[0].taxdescription;

      console.log(JSON.stringify(resultData));
  // this.router.navigateByUrl('viewspa');
    },
    error => {
      alert('error in Viewing TAX...');

    });
  }
  update() {
    const taxid = this.route.snapshot.paramMap.get('taxid');

    this.edittaxservice.edittax(this.taxtype, this.taxpercent, this.taxdescription, taxid).subscribe(resultData => {
      console.log(JSON.stringify(resultData));

alert('Successfully Updated...');

  // this.router.navigateByUrl('viewspa');
    },
    error => {
      alert('error in Editing TAX...');

    });
      }
}
