import { Component, Input } from '@angular/core';
import { User } from '../../shared/models/user';
import { Router } from '@angular/router';
import { config } from '../../shared/consts/defines';

@Component({
  selector: 'bpu-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() UserData: User
  constructor(private router: Router) { }

  goToUserDetails() {
    if (this.UserData.id)
      this.router.navigate([config.user.viewUser.route, this.UserData.id])
  }
}
