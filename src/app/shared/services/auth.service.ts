import { Injectable } from '@angular/core';
import { DataApiService } from './data-api.service';
import { API_ROUTES } from '../consts/api-routes';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {

  isLogedin: boolean;
  constructor(
    private dataApiService: DataApiService) { }
  login(body) {
    return this.dataApiService.addOrUpdate(API_ROUTES.LOGIN, body, 'post').map((res) => {
      localStorage.setItem('user', res['token']);
      this.isLogedin = true;
    })
  }
  register(body) {
    // return this.http.post(API_ROUTES.LOGIN, body).map(res=>{return res})
    return this.dataApiService.addOrUpdate(API_ROUTES.REGISTER, body, 'post').map((res) => {
      localStorage.setItem('user', res['token'])
      this.isLogedin = true;
    });
  }

  logInCheker() {
    if (localStorage.getItem('user')) {
      this.isLogedin = false;

      console.log('logInCheker : ', true);
      return true;
    } else {
      this.isLogedin = true;
      
      console.log('logInCheker : ', false);
      return false;
    }
  }
}
