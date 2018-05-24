import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DataApiService } from './services/data-api.service';
import { HttpClientModule } from '@angular/common/http';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    HttpClientModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [HeaderComponent, UserDeleteComponent],
  exports: [
    HeaderComponent, UserDeleteComponent
  ],
  providers:[DataApiService, AuthService]
})
export class SharedModule { }
