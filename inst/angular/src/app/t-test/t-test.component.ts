import { Component, ViewChild, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbTabset, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { TTest, TTestKind } from './t-test';
import { Project } from './project';
import { ProjectService } from './project.service';
import { ResizeService } from '../resize.service';

import { DraggableDialogComponent } from '../draggable-dialog/draggable-dialog.component';
import { OutputPaneComponent } from './output-pane/output-pane.component';

import { commitHash, buildTimestamp } from '../version';

@Component({
  selector: 't-test-root',
  templateUrl: './t-test.component.html',
  styleUrls: ['./t-test.component.css']
})
export class TTestComponent implements OnInit {
  newModel: TTest;
  projects: Project[] = [];
  selectedIndex: number;
  selectedProject: Project;
  commitHash = commitHash.substr(0, 7);
  buildTimestamp = buildTimestamp;
  kind: TTestKind;

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

  constructor(
    private projectService: ProjectService,
    private resizeService: ResizeService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.resizeService.onResize.subscribe(() => {
      this.outputPane.resize();
    });

    this.route.data.subscribe(data => {
      this.kind = data.kind;
      this.newModel = new TTest({ kind: this.kind });

      this.projects = this.projectService.getProjects(this.kind);
      this.selectedIndex = this.projectService.getSelectedIndex(this.kind);
      this.selectedProject = this.projects[this.selectedIndex];

      if (this.projects.length == 0) {
        /* Add example project */
        let model = new TTest({
          kind: this.kind, output: 'power', alpha: 0.05, power: 0.8, delta: 5,
          sigma: 10, n: 33
        });
        if (this.kind == TTestKind.Independent) {
          model.m = 2;
        }
        this.createProject(model, false);
      }
    });
  }

  tabTitle(index: number): string {
    let result = '';
    switch (this.kind) {
      case TTestKind.Paired:
        result += 'Paired t-test ';
        break;
      case TTestKind.Independent:
        result += 'Ind. t-test ';
        break;
      case TTestKind.ZTest:
        result += 'z-test ';
        break;
    }
    result += ' #' + (index + 1).toString();
    return result;
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

  createProject(model: TTest, select = true): void {
    let project = this.projectService.createProject(this.kind);
    project.addModel(model).subscribe(() => {
      if (select) {
        this.selectProject(this.projects.length - 1);
      }
    });
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
    this.projectService.setSelectedIndex(this.kind, this.selectedIndex);
  }

  onProjectChanged(): void {
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
}
