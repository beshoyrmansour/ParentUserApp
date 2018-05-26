import { TestBed, inject } from '@angular/core/testing';

import { DataApiService } from './data-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DataApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [DataApiService]
    });
  });

  it('should be created', inject([HttpTestingController, DataApiService], (httpMock: HttpTestingController, service: DataApiService) => {
    expect(service).toBeTruthy();
  }));
});
