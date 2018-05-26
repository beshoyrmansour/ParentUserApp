import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { UserControlComponent } from './user-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { mockUsersService } from '../../mocks/services/mock-users-service';
import { UsersService } from '../users.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

fdescribe('UserControlComponent', () => {
  let component: UserControlComponent;
  let fixture: ComponentFixture<UserControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserControlComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([]),
        ToastrModule.forRoot()
      ], providers: [
        { provide: UsersService, useClass: mockUsersService },
        ToastrService,

      ]
    })
      .compileComponents();

  }));

  // beforeEach(inject([ToastrService],(ToastrService:ToastrService) => {
  beforeEach(() => {
    fixture = TestBed.createComponent(UserControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initiate users form on initiating the component', () => {
    let spy = spyOn(component, 'initUserForm').and.callThrough()
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should not call updateUser form usersService when form is invalid', (inject([UsersService], (usersService: UsersService) => {
    let spy = spyOn(usersService, 'updateUser').and.callThrough()
    component.save();
    expect(spy).not.toHaveBeenCalled();
  })));
 
  it('should call updateUser form usersService when form is valid', (inject([UsersService], (usersService: UsersService) => {
    component.userForm.controls['first_name'].setValue('sss');
    component.userForm.controls['last_name'].setValue('sss');
    let spy = spyOn(usersService, 'updateUser').and.callThrough()
    component.save();
    expect(spy).not.toHaveBeenCalled();
  })));

  it('should call updateUser form usersService when form is valid', (inject([ToastrService], (toastr: ToastrService) => {
    component.userForm.controls['first_name'].setValue('sss');
    component.userForm.controls['last_name'].setValue('sss');
    let spy = spyOn(toastr, 'success').and.callThrough()
    component.save();
    expect(spy).not.toHaveBeenCalled();
  })));
});
