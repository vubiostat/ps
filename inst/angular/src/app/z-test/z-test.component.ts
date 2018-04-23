import { Component, ViewChild, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { NgbTabset, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switch';

import { ZTest } from './z-test';
import { Project } from './project';
import { ProjectFactoryService } from './project-factory.service';

import { DraggableDialogComponent } from './draggable-dialog/draggable-dialog.component';
import { OutputPaneComponent } from './output-pane/output-pane.component';

// globals from webpack
declare var __COMMITHASH__: string;
declare var __BUILDTIMESTAMP__: string;

@Component({
  selector: 'z-test-root',
  templateUrl: './z-test.component.html',
  styleUrls: ['./z-test.component.css']
})
export class ZTestComponent implements OnInit {
  newModel = new ZTest();
  projects: Project[] = [];
  selectedProject: Project;
  commitHash = __COMMITHASH__.substr(0, 7);
  buildTimestamp = __BUILDTIMESTAMP__;

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

  constructor(private projectFactory: ProjectFactoryService) {}

  ngOnInit(): void {
    /* Add example project */
    let model = new ZTest({
      output: 'power', alpha: 0.05, power: 0.8, delta: 5, sigma: 10, n: 33
    });
    this.createProject(model, false);
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

  createProject(model: ZTest, select = true): void {
    let project = this.projectFactory.create();
    project.addModel(model).
      then(result => {
        this.projects.push(project);

        if (select) {
          setTimeout(() => {
            this.tabset.select(`z-test-${this.projects.length}`);
          }, 1);
        }
      }).
      catch(err => console.error(err));
  }

  onTabChange(event: NgbTabChangeEvent): void {
    let md = event.nextId.match(/\d+/);
    if (md) {
      let index = parseInt(md[0]) - 1;
      this.selectedProject = this.projects[index];
    } else {
      this.selectedProject = undefined;
    }
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
