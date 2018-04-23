import { Injectable } from '@angular/core';

import { ZTestService } from './z-test.service';
import { Project } from './project';
import { ZTest } from './z-test';

@Injectable()
export class ProjectFactoryService {
  constructor(private ztestService: ZTestService) {}

  create(): Project {
    return new Project(this.ztestService);
  }
}
