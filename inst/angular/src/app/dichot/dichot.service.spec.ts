import { TestBed, inject } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { DichotService } from './dichot.service';

describe('dichot.DichotService', () => {
  beforeEach(() => {
    let httpClientStub = {};

    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpClientStub },
        DichotService
      ]
    });
  });

  it('should be created', inject([DichotService], (service: DichotService) => {
    expect(service).toBeTruthy();
  }));
});
