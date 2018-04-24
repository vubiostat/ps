import { TestBed, inject } from '@angular/core/testing';

import { PlotOptionsService } from './plot-options.service';

describe('PlotOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlotOptionsService]
    });
  });

  it('should be created', inject([PlotOptionsService], (service: PlotOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
