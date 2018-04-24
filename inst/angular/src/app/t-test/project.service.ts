import { Injectable } from '@angular/core';

import { TTestService } from './t-test.service';
import { Project } from './project';
import { TTest } from './t-test';

@Injectable()
export class ProjectService {
  private projects: Project[] = [];

  constructor(private ttestService: TTestService) {}

  createProject(): Project {
    let project = new Project(this.ttestService);
    this.projects.push(project);
    return project;
  }

  getProjects(): Project[] {
    // return reference for convenience
    return this.projects;
  }

  numProjects(): number {
    return this.projects.length;
  }
}
