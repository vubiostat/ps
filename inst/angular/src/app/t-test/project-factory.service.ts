import { Injectable } from '@angular/core';

import { TTestService } from './t-test.service';
import { Project } from './project';
import { TTest } from './t-test';

@Injectable()
export class ProjectFactoryService {
  constructor(private ttestService: TTestService) {}

  create(): Project {
    return new Project(this.ttestService);
  }
}
