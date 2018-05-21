import { Injectable } from '@angular/core';

import { TTestService } from './t-test.service';
import { Project } from './project';
import { TTest, TTestKind } from './t-test';

@Injectable()
export class ProjectService {
  private projects: { [name: string]: Project[] } = {};
  private selectedIndex: { [name: string]: number } = {};

  constructor(private ttestService: TTestService) {}

  createProject(kind: TTestKind): Project {
    let project = new Project(this.ttestService);
    project.kind = kind;
    let projects = this.getProjects(kind);
    projects.push(project);
    return project;
  }

  getProjects(kind: TTestKind): Project[] {
    // return reference for convenience
    if (this.projects[kind] === undefined) {
      this.projects[kind] = [];
    }
    return this.projects[kind];
  }

  numProjects(kind: TTestKind): number {
    return this.getProjects(kind).length;
  }

  setSelectedIndex(kind: TTestKind, index: number): void {
    this.selectedIndex[kind] = index;
  }

  getSelectedIndex(kind: TTestKind): number {
    return this.selectedIndex[kind];
  }
}
