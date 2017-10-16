import { TestBed, inject } from '@angular/core/testing';

import { TTestService } from './t-test.service';

describe('TTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TTestService]
    });
  });

  it('should ...', inject([TTestService], (service: TTestService) => {
    expect(service).toBeTruthy();
  }));
});
