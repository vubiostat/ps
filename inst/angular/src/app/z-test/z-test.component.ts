import { Component, ViewChild, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { NgbTabset, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { ZTest } from './z-test';
import { Project } from './project';
import { ProjectService } from './project.service';

import { DraggableDialogComponent } from '../draggable-dialog/draggable-dialog.component';
import { OutputPaneComponent } from './output-pane/output-pane.component';

import { commitHash, buildTimestamp } from '../version';

@Component({
  selector: 'z-test-root',
  templateUrl: './z-test.component.html',
  styleUrls: ['./z-test.component.css']
})
export class ZTestComponent implements OnInit {
  newModel = new ZTest();
  projects: Project[] = [];
  selectedIndex: number;
  selectedProject: Project;
  commitHash = commitHash.substr(0, 7);
  buildTimestamp = buildTimestamp;

  helpTitles = {
    'overview': 'PS Overview',
    'start': 'PS Start Tab'
  };
  helpTopic = 'overview';
  blockSelection = false;
  hoverBoxEnabled = true;

  @ViewChild('plotOptionsDialog') plotOptionsDialog: DraggableDialogComponent;
  @ViewChild('helpDialog') helpDialog: DraggableDialogComponent;
  @ViewChild('tabset') tabset: NgbTabset;
  @ViewChild('outputPane') outputPane: OutputPaneComponent;

  constructor(private projectService: ProjectService) {
    this.projects = this.projectService.getProjects();
    this.selectedIndex = this.projectService.getSelectedIndex();
    this.selectedProject = this.projects[this.selectedIndex];
  }

  ngOnInit(): void {
    if (this.projects.length == 0) {
      /* Add example project */
      let model = new ZTest({
        output: 'power', alpha: 0.05, power: 0.8, delta: 5, sigma: 10, n: 33
      });
      this.createProject(model, false);
    }
  }

  toggleHelp(topic: string): void {
    if (this.helpDialog.isOpen() && this.helpTopic == topic) {
      this.helpDialog.close();
    } else {
      this.helpTopic = topic;
      this.helpDialog.open();
    }
  }

  togglePlotOptions(): void {
    this.plotOptionsDialog.toggle();
  }

  toggleHoverBox(): void {
    this.hoverBoxEnabled = !this.hoverBoxEnabled;
  }

  save(): void {
    this.outputPane.openSaveDialog();
  }

  calculate(): void {
    this.createProject(this.newModel);
  }

  selectProject(index: number): void {
    setTimeout(() => {
      this.tabset.select(`t-test-${index + 1}`);
    }, 1);
  }

  createProject(model: ZTest, select = true): void {
    let project = this.projectService.createProject();
    project.addModel(model).
      then(result => {
        if (select) {
          this.selectProject(this.projects.length - 1);
        }
      }).
      catch(err => console.error(err));
  }

  onTabChange(event: NgbTabChangeEvent): void {
    let md = event.nextId.match(/\d+/);
    if (md) {
      let index = parseInt(md[0]) - 1;
      this.selectedIndex = index;
      this.selectedProject = this.projects[index];
    } else {
      this.selectedIndex = undefined;
      this.selectedProject = undefined;
    }
    this.projectService.setSelectedIndex(this.selectedIndex);
  }

  onProjectChanged(): void {
    this.outputPane.updateProject();
    this.outputPane.redrawPlots();
  }

  onModelChanged(): void {
    this.outputPane.redrawPlots();
  }

  onPlotOptionChanged(): void {
    this.outputPane.redrawPlots();
  }

  onPlotOptionsReset(): void {
    this.outputPane.redrawPlots();
  }

  onProjectChangedFromPlotOptions(): void {
    this.outputPane.redrawPlots();
  }

  onMouseUp(): void {
    this.plotOptionsDialog.stopDragging();
  }

  onChildDragStarted(): void {
    this.blockSelection = true;
  }

  onChildDragEnded(): void {
    this.blockSelection = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.outputPane.resize();
  }
}
