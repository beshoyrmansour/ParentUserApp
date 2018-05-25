import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { config } from '../../shared/consts/defines';
@Component({
  selector: 'bpu-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(    private router: Router ) { }
  gotoSignUp(){
    this.router.navigate([config.auth.signup.route])
  }
}
