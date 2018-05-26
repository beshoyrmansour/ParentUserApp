import { TestBed, inject } from '@angular/core/testing';

import { UsersService } from './users.service';
import { DataApiService } from '../shared/services/data-api.service';
import { mockApiDataService } from '../mocks/services/mock-api-data-service';
import { mockUsersData } from '../mocks/data/mock-users-data';
import { API_ROUTES } from '../shared/consts/api-routes';
import { Observable } from 'rxjs/Observable';

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService,
        { provide: DataApiService, useClass: mockApiDataService },
      ]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  it('should be call getData from DataApiService and return user when call getSingleUser',
    inject([UsersService, DataApiService], (service: UsersService, dataApiService: DataApiService) => {
      let spy = spyOn(dataApiService, 'getData').and.callThrough();
      service.getSingleUser(6).subscribe(res => {
        expect(spy).toHaveBeenCalledWith(API_ROUTES.SINGLE_USER.replace('{userId}', '6'));
        expect(res).toEqual(mockUsersData.user);
      })
    }));

  it('should be call getData from DataApiService and return allUsers when call listingUsers',
    inject([UsersService, DataApiService], (service: UsersService, dataApiService: DataApiService) => {
      let spy = spyOn(dataApiService, 'getData').and.callThrough();
      service.listingUsers(2).subscribe(res => {
        expect(spy).toHaveBeenCalledWith(API_ROUTES.LIST_USERS.replace('{pageNumber}', '2'));
        expect(res['data']).toEqual(service.allUsers);
      })
    }));

  it('should be call addOrUpdate from DataApiService and return user when call createUser',
    inject([UsersService, DataApiService], (service: UsersService, dataApiService: DataApiService) => {
      let spy = spyOn(dataApiService, 'addOrUpdate').and.callThrough();
      service.createUser(mockUsersData.user).subscribe(res => {
        expect(spy).toHaveBeenCalledWith(API_ROUTES.CREATE);
        expect(res).toEqual(mockUsersData.createUserRes);
      })
    }));

  it('should be call addOrUpdate from DataApiService and return user when call updateUser',
    inject([UsersService, DataApiService], (service: UsersService, dataApiService: DataApiService) => {
      let spy = spyOn(dataApiService, 'addOrUpdate').and.callThrough();
      service.updateUser(mockUsersData.user.id, mockUsersData.user).subscribe(res => {
        expect(spy).toHaveBeenCalledWith(API_ROUTES.UPDATE.replace('{userId}', mockUsersData.user.id.toString()));
        expect(res).toEqual(mockUsersData.updateUserRes);
      })
    }));

  it('should be call delete from DataApiService and return user when call deleteUser',
    inject([UsersService, DataApiService], (service: UsersService, dataApiService: DataApiService) => {
      let spy = spyOn(dataApiService, 'delete').and.callThrough();
      service.deleteUser(mockUsersData.user.id).subscribe(res => {
        expect(spy).toHaveBeenCalledWith(API_ROUTES.DELETE.replace('{userId}', mockUsersData.user.id.toString()));
        expect(res).toEqual(true);
      })
    }));


});
