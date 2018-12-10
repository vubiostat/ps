import { TestBed, inject } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { TTestService } from './t-test.service';

describe('t-test.TTestService', () => {
  let httpClientStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpClientStub },
        TTestService
      ]
    });
  });

  it('should be created', inject([TTestService], (service: TTestService) => {
    expect(service).toBeTruthy();
  }));
});
