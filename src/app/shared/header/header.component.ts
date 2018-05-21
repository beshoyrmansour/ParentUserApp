import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bpu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean;
  isLoggedIn:boolean
  constructor() { }

  ngOnInit() {
    this.isCollapsed = true;
    if(!localStorage.getItem('user')){
      this.isLoggedIn=true
    }

  }

}
