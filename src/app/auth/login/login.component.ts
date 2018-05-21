import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { config } from '../../shared/consts/defines';
import { AuthService } from '../auth.service';

@Component({
  selector: 'bpu-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,

  ) { }

  ngOnInit() {
    this.initLoginForm()
  }
  initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(() => {
        if (localStorage.getItem('user')) {
          /* ToDo navigate to HomeComp */
          // this.router.navigate['']
        }
      })
    }
  }
  gotoSignUp() {
    this.router.navigate([config.auth.signup.route])
  }

}
