import { Component, OnInit } from '@angular/core';
import { ViewtaxService } from '../../services/viewtax.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewtax',
  templateUrl: './viewtax.component.html',
  styleUrls: ['./viewtax.component.css']
})
export class ViewtaxComponent implements OnInit {
  public taxtype;
  // taxtype;
   taxpercent; taxdescription;
  viewtaxdetails: any[] = [];
  constructor(private viewtaxservice: ViewtaxService, private router: Router) { }

  ngOnInit() {
    this.viewtaxservice.viewtax().subscribe(resultData => {
      const taxresponse = resultData.spa_id;
        // console.log(JSON.stringify(taxresponse));
        if (taxresponse && typeof taxresponse === 'object') {
            for (let i = 0; i < taxresponse.length; i++) {
              this.viewtaxdetails.push({
                taxtype : taxresponse[i].taxtype,
                taxpercent : taxresponse[i].taxpercent,
                taxdescription : taxresponse[i].taxdescription,
                taxid : taxresponse[i].tax_id
                });
            }
          }

    },
    error => {
      alert('error');
    });
  }

}
