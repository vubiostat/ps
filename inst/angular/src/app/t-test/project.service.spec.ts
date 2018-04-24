import { TestBed, inject } from '@angular/core/testing';

import { ProjectService } from './project.service';
import { TTestService } from './t-test.service';

describe('ProjectService', () => {
  let ttestServiceStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TTestService, useValue: ttestServiceStub },
        ProjectService
      ]
    });
  });

  it('should be created', inject([ProjectService], (service: ProjectService) => {
    expect(service).toBeTruthy();
  }));
});
