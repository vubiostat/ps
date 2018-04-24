import { Injectable } from '@angular/core';

import { ZTestService } from './z-test.service';
import { Project } from './project';
import { ZTest } from './z-test';

@Injectable()
export class ProjectService {
  private projects: Project[] = [];
  private selectedIndex: number;

  constructor(private ttestService: ZTestService) {}

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

  setSelectedIndex(index): void {
    this.selectedIndex = index;
  }

  getSelectedIndex(): number {
    return this.selectedIndex;
  }
}
