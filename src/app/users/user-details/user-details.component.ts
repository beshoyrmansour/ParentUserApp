import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from './../users.service';
import { User } from '../../shared/models/user';
import { config } from '../../shared/consts/defines';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserDeleteComponent } from '../../shared/user-delete/user-delete.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'bpu-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  selectedUser: User;
  userId: number;

  modalRef;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private modalService: NgbModal,
    private toastr: ToastrService,

  ) { }

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('id');
    this.usersService.getSingleUser(this.userId).subscribe((res) => {
      this.selectedUser = res['data']
    })
  }

  openDeleteModal() {
    this.modalRef = this.modalService.open(UserDeleteComponent);
    this.modalRef.componentInstance.selectedUser = this.selectedUser;
    this.modalRef.componentInstance.deleteAction = this.deleteUser();

  }

  gotoEditUser() {
    this.router.navigate([config.user.editUser.route, this.userId])
  }

  deleteUser() {
    return (()=>{this.usersService.deleteUser(+this.selectedUser.id).subscribe((res) => {
      this.toastr.success( '👍 👍 👍', this.selectedUser.first_name+' deleted!');
      this.router.navigate([config.user.allUsers.route]);
      this.modalRef['close']();
    },(err)=>{
      this.toastr.error( '😱 😱 😱', 'something went wrong!');

    })})
  }
}
