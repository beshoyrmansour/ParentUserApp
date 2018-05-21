import { Injectable } from '@angular/core';
import { DataApiService } from '../shared/services/data-api.service';
import { API_ROUTES } from '../shared/consts/api-routes';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {

  constructor(
    private dataApiService: DataApiService) { }
  login(body) {
    return this.dataApiService.addOrUpdate(API_ROUTES.LOGIN, body, 'post').map((res) => {
      localStorage.setItem('user', res['token']);
    })
  }
  register(body) {
    // return this.http.post(API_ROUTES.LOGIN, body).map(res=>{return res})
    return this.dataApiService.addOrUpdate(API_ROUTES.REGISTER, body, 'post').map((res) => {
      localStorage.setItem('user', res['token'])
    });
  }
}
