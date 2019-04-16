import { Component, OnInit } from '@angular/core';
import { ViewspaService } from './../../services/viewspa.service';
 import { Router} from '@angular/router';

@Component({
  selector: 'app-viewspa',
  templateUrl: './viewspa.component.html',
  styleUrls: ['./viewspa.component.css']
})
export class ViewspaComponent implements OnInit {
  public spa_name: string;
  public tag_line: string;
  public address_line_1: string;
  public city: string;
  public state: string;
  public postal_code: number;
  public country: string;
  public mobile: number;
  public email: string;
  public spa_id: number;
  viewspadetails: any[] = [];search:string;
  // public viewspadetails: Array<{spa_name: string, tag_line: string,  address_line_1: string;  city: string;
  //    state: string;  postal_code: number;  country: string;  mobile: number;
  //    email: string;  spa_id: number}> = [];
  constructor(private viewspaservice: ViewspaService, private router: Router) { }

  ngOnInit() {

    this.viewspaservice.viewspa().subscribe(resultData => {
      // if (status === 200) {
        const sparesponse = resultData.spa_id;
        if (sparesponse && typeof sparesponse === 'object') {
            for (let i = 0; i < sparesponse.length; i++) {
             
              this.viewspadetails.push({
                  spa_name : sparesponse[i].spa_name,
                  tag_line : sparesponse[i].tag_line,
                address_line_1 : sparesponse[i].address_line_1,
                  city : sparesponse[i].city,
                  state : sparesponse[i].state,
                    postal_code : sparesponse[i].postal_code,
                  country : sparesponse[i].country,
                  mobile : sparesponse[i].mobile,
                  email : sparesponse[i].email,
                    spa_id : sparesponse[i].spa_id,
                });
            }
          }

  //  }
  // this.router.navigateByUrl('dashboard');
    },
    error => {
      alert('error');
    });
     }

}
