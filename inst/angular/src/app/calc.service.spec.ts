import { TestBed, inject } from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalcService]
    });
  });

  it('should ...', inject([CalcService], (service: CalcService) => {
    expect(service).toBeTruthy();
  }));
});
