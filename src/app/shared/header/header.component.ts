import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { config } from '../consts/defines';

@Component({
  selector: 'bpu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean;
  isLoggedIn: boolean
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.isCollapsed = true;
    if (!localStorage.getItem('user')) {
      this.isLoggedIn = true
    }
  }
  gotoSignUp() {
    this.router.navigate([config.auth.signup.route])

  }

  gotologIn(){
    this.router.navigate([config.auth.login.route])
  }

  logout(){
    localStorage.clear();
    
  }

}
