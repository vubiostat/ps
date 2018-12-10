import { TestBed, inject } from '@angular/core/testing';

import { DichotService } from './dichot.service';
import { ProjectService } from './project.service';

describe('dichot.ProjectService', () => {
  let dichotServiceStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DichotService, useValue: dichotServiceStub },
        ProjectService
      ]
    });
  });

  it('should be created', inject([ProjectService], (service: ProjectService) => {
    expect(service).toBeTruthy();
  }));
});
