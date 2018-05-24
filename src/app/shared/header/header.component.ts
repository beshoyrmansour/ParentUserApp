import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { config } from '../consts/defines';
import { AuthService } from '../services/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'bpu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  isCollapsed: boolean;
  showLogin: boolean;
  showLogout: boolean;
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,

  ) { }

  ngOnInit() {
    this.initLoginForm()
    this.isCollapsed = true;
    if (localStorage.getItem('user')) {
      this.showLogin = false;
      this.showLogout = true;
    } else {
      this.showLogin = true;
      this.showLogout = false;
    }
  }

  gotoSignUp() {
    this.router.navigate([config.auth.signup.route])

  }

  gotologIn() {
    this.router.navigate([config.auth.login.route])
  }

  logout() {
    localStorage.clear();
    this.router.navigate([config.auth.login.route])
    this.showLogin = true;
    this.showLogout = false;
    this.authService.logInCheker()
  }

  isLoggedIn() {
    this.authService.logInCheker()
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', this.showLogin);
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
          this.authService.isLogedin = true;
          this.showLogin = false;
          this.showLogout = true;
          this.router.navigate([config.user.allUsers.route])
        }
      })
    }
  }


}
