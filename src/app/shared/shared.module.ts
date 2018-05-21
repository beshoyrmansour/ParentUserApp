import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()

  ],
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
