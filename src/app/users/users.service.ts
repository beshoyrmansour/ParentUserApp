import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { DataApiService } from '../shared/services/data-api.service';

@Injectable()
export class UsersService {

  constructor(private dataApiService: DataApiService) { }

  listingUsers() {

  }

  getSingleUser(userId: number) {

  }

  createUser(user: User) {

  }

  deleteUser(userId: number) {

  }

  updateUser(userId: number) {

  }

}
