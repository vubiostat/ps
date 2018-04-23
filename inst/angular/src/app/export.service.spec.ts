import { TestBed, inject } from '@angular/core/testing';

import { Http } from '@angular/http';
import { ExportService } from './export.service';

describe('ExportService', () => {
  let httpStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Http, useValue: httpStub },
        ExportService
      ]
    });
  });

  it('should be created', inject([ExportService], (service: ExportService) => {
    expect(service).toBeTruthy();
  }));
});
