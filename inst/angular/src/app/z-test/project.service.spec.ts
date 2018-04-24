import { TestBed, inject } from '@angular/core/testing';

import { ProjectService } from './project.service';
import { ZTestService } from './z-test.service';

describe('ProjectService', () => {
  let ttestServiceStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ZTestService, useValue: ttestServiceStub },
        ProjectService
      ]
    });
  });

  it('should be created', inject([ProjectService], (service: ProjectService) => {
    expect(service).toBeTruthy();
  }));
});
