import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { config } from '../consts/defines';
import { AuthService } from '../services/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'bpu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
      this.loginSwitcher(false)
    } else {
      this.loginSwitcher(true)
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate([config.auth.login.route])
    this.loginSwitcher(true)
    this.authService.logInCheker()
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
          this.loginSwitcher(false)
          this.router.navigate([config.user.allUsers.route])
        }
      })
    }
  }

  loginSwitcher(flag) {
    this.showLogin = flag;
    this.showLogout = !flag;
  }
  gotoAllUsers() {
    this.router.navigate([config.user.allUsers.route]);
  }

}
