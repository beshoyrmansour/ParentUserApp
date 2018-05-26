import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { AllUsersComponent } from './all-users.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UsersService } from '../users.service';
import { mockUsersService } from '../../mocks/services/mock-users-service';

describe('AllUsersComponent', () => {
  let component: AllUsersComponent;
  let fixture: ComponentFixture<AllUsersComponent>;
  let page: number = 0;
  let per_page: number;
  let total: number;
  let total_pages: number;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllUsersComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: UsersService, useClass: mockUsersService },

      ]

    })
      .compileComponents();
  }));

  beforeEach(inject([UsersService], (usersService) => {
    fixture = TestBed.createComponent(AllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadUsersData on OnInitiation', () => {
    let spy = spyOn(component, 'loadUsersData');
    component.ngOnInit()
    expect(spy).toHaveBeenCalled();
  });

  it('should fill user data after calling loadUsersData', () => {
    component.loadUsersData(true)
    expect(component.page).not.toBeNull()
    expect(component.page).toEqual(2)
    expect(component.per_page).not.toBeNull()
    expect(component.per_page).toEqual(3)
    expect(component.total).not.toBeNull()
    expect(component.total).toEqual(12)
    expect(component.total_pages).not.toBeNull()
    expect(component.total_pages).toEqual(4)
    expect(component.allUsers).toBeDefined()
    expect(component.allUsers).not.toBeNull()
  });


});
