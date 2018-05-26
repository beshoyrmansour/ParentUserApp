import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../../shared/models/user';
import { ToastrService } from 'ngx-toastr';
import { config } from '../../shared/consts/defines';

@Component({
  selector: 'bpu-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.scss']
})
export class UserControlComponent implements OnInit {
  isEditMode: boolean;
  userId: number;
  userForm: FormGroup;
  selectedUser: User;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.isEditMode = true
      this.selectedUser = this.usersService.allUsers.filter((user) => {
        return this.userId == user.id
      })[0]
      if (!this.selectedUser) {
        this.usersService.getSingleUser(this.userId).subscribe(res => {
          this.selectedUser = res['data']
          this.initUserForm();
        }, () => {
          this.toastr.error('something went wrong!', 'invalid user Id!');
          this.router.navigate([config.user.allUsers.route]);
        })
      }
    }
    this.initUserForm();
  }
  initUserForm() {
    this.userForm = this.fb.group({
      "first_name": [this.selectedUser ? this.selectedUser.first_name : '', Validators.required],
      "last_name": [this.selectedUser ? this.selectedUser.last_name : '', Validators.required]
    })
  }
  save() {
    if (this.userForm.valid) {
      if (this.isEditMode) {
        this.usersService.updateUser(this.userId, this.userForm.value).subscribe(res => {
          this.toastr.success('👍 👍 👍', this.userForm.controls['first_name'].value + ' Uppdated!');
          this.router.navigate([config.user.allUsers.route]);
        })
      } else {
        this.usersService.createUser(this.userForm.value).subscribe(res => {
          this.toastr.error('😱 😱 😱', 'something went wrong!');
        })
      }
    }

  }
}
