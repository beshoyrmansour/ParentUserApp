import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DataApiService } from './services/data-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
  providers:[DataApiService]
})
export class SharedModule { }
