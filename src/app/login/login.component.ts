import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';
 import { Router} from '@angular/router';
@Component({
  selector: 'app-demo',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  usersecret;
  constructor(private loginservice: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.loginservice.login(this.username, this.usersecret).subscribe(resultData => {
      const loginresponse = resultData.LoginDetails;
      localStorage.setItem('spaid', loginresponse.spa_id);
      localStorage.setItem('userid', loginresponse.userid);
        this.router.navigateByUrl('dashboard');
    },
    error => {
      alert('Incorrect Username or Password');
    });
  }
}
