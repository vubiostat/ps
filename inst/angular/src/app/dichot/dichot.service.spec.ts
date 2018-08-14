import { TestBed, inject } from '@angular/core/testing';

import { DichotService } from './dichot.service';

describe('DichotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DichotService]
    });
  });

  it('should be created', inject([DichotService], (service: DichotService) => {
    expect(service).toBeTruthy();
  }));
});
