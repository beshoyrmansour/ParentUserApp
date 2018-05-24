import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'bpu-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  allUsers: Array<User>
  page: number = 0;
  per_page: number;
  total: number;
  total_pages: number;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.loadUsersData(true);
  }

  loadUsersData(flag: boolean) {
    this.allUsers = new Array<User>();
    flag ? (this.page++) : (this.page--)
    this.usersService.listingUsers(this.page).subscribe(res => {
      this.page = res['page']
      this.per_page = res['per_page']
      this.total = res['total']
      this.total_pages = res['total_pages']
      this.allUsers = res['data'];
    }, (err) => {
      console.error('loadUsersData', err);
    })
  }

}
