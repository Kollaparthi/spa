import { Component, OnInit } from '@angular/core';
import { AddtaxService } from './../../services/addtax.service';
 import { Router} from '@angular/router';

@Component({
  selector: 'app-addtax',
  templateUrl: './addtax.component.html',
  styleUrls: ['./addtax.component.css']
})
export class AddtaxComponent implements OnInit {

  constructor(private addtaxservice: AddtaxService, private router: Router) { }
  taxtype; taxpercent; taxdescription;
  ngOnInit() {
  }
  save() {
    this.addtaxservice.addtax(this.taxtype, this.taxpercent, this.taxdescription
      ).subscribe(resultData => {
      // console.log(JSON.stringify(resultData));
  // this.router.navigateByUrl('viewspa');
    },
    error => {
      alert('error in Adding TAX...');

    });
      }
}
