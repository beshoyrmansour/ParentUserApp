import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataApiService } from '../shared/services/data-api.service';
import { AuthService } from '../shared/services/auth.service';
import { AuthUserGuard } from '../shared/guards/auth-user.guard';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent, SignupComponent],
  providers: [AuthService, DataApiService, AuthUserGuard]
})
export class AuthModule { }
