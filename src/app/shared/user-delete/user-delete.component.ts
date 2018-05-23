import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../shared/models/user';
import { config } from '../../shared/consts/defines';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'bpu-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {
@Input() selectedUser:User;
@Input() deleteAction :Function;
  constructor(
    private router: Router,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    
  }
  deleteUser(){
  this.deleteAction();
  }
}
