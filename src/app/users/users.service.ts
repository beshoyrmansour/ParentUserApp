import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { DataApiService } from '../shared/services/data-api.service';
import { Observable } from 'rxjs/Observable';
import { API_ROUTES } from '../shared/consts/api-routes';
import { constants } from '../shared/consts/defines';

@Injectable()
export class UsersService {
  allUsers= new Array<User>();
  constructor(private dataApiService: DataApiService) { }

  listingUsers(pageNumber: number): Observable<Array<User>> {
    this.allUsers= new Array<User>();
    return this.dataApiService.getData(API_ROUTES.LIST_USERS.replace('{pageNumber}', pageNumber.toString())).map(res => {
      this.allUsers = res['data'];
      return res
    })
  }

  getSingleUser(userId: number): Observable<User> {
    return this.dataApiService.getData(API_ROUTES.SINGLE_USER.replace('{userId}', userId.toString())).map(res => res)
  }

  createUser(user: User): Observable<User> {
    return this.dataApiService.addOrUpdate(API_ROUTES.CREATE, user, 'post').map(res => res)
  }

  deleteUser(userId: number): Observable<Boolean> {
    return this.dataApiService.delete(API_ROUTES.DELETE.replace('{userId}', userId.toString())).map(res => res)
  }

  updateUser(userId: number, userData:User): Observable<any> {
    return this.dataApiService.addOrUpdate(API_ROUTES.UPDATE.replace('{userId}', userId.toString()),userData, 'put').map(res => res)
  }

}
