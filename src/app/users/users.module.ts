import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserControlComponent } from './user-control/user-control.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DataApiService } from '../shared/services/data-api.service';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers:[DataApiService, UsersService],
  declarations: [UsersComponent, AllUsersComponent, UserControlComponent, UserCardComponent, UserDetailsComponent]
})
export class UsersModule { }
