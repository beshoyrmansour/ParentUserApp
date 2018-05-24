import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { config } from '../shared/consts/defines';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserControlComponent } from './user-control/user-control.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: '', redirectTo: config.user.allUsers.path, pathMatch: 'full' },
      { path: config.user.allUsers.path, component: AllUsersComponent },
      { path: config.user.addUser.path, component: UserControlComponent },
      { path: config.user.editUser.path, component: UserControlComponent },
      { path: config.user.viewUser.path, component: UserDetailsComponent },
      { path:'**', redirectTo: config.auth.login.path, pathMatch:'full'}
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
