import { TestBed, inject } from '@angular/core/testing';

import { Http } from '@angular/http';
import { ZTestService } from './z-test.service';

describe('ZTestService', () => {
  let httpStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Http, useValue: httpStub },
        ZTestService
      ]
    });
  });

  it('should ...', inject([ZTestService], (service: ZTestService) => {
    expect(service).toBeTruthy();
  }));
});
