import { Injectable } from '@angular/core';

import { ProjectType } from './project-type';
import { AbstractProject } from './abstract-project';

@Injectable()
export class AbstractProjectService {
  private projects: AbstractProject[][] = [];

  addProject(type: ProjectType, project: AbstractProject): void {
    if (this.projects[type] === undefined) {
      this.projects[type] = [];
    }
    this.projects[type].push(project);
  }

  getProjects(type: ProjectType): AbstractProject[] {
    if (this.projects[type] === undefined) {
      this.projects[type] = [];
    }

    // return reference for convenience
    return this.projects[type];
  }

  numProjects(type: ProjectType): number {
    return this.getProjects(type).length;
  }

  getProject(type: ProjectType, index: number): AbstractProject {
    let projects = this.getProjects(type);
    return projects[index];
  }
}
