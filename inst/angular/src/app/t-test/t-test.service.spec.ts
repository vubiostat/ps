import { TestBed, inject } from '@angular/core/testing';

import { Http } from '@angular/http';
import { TTestService } from './t-test.service';

describe('TTestService', () => {
  let httpStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Http, useValue: httpStub },
        TTestService
      ]
    });
  });

  it('should ...', inject([TTestService], (service: TTestService) => {
    expect(service).toBeTruthy();
  }));
});
