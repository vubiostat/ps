import { Injectable } from '@angular/core';

import { DichotService } from './dichot.service';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [];
  private selectedIndex: number;

  constructor(private dichotService: DichotService) {}

  createProject(): Project {
    let project = new Project(this.dichotService);
    this.projects.push(project);
    return project;
  }

  getProjects(): Project[] {
    return this.projects;
  }

  numProjects(): number {
    return this.getProjects().length;
  }

  setSelectedIndex(index: number): void {
    this.selectedIndex = index;
  }

  getSelectedIndex(): number {
    return this.selectedIndex;
  }
}
