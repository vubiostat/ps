import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { Subscription } from 'rxjs';

import { AbstractProjectService } from '../abstract-project.service';
import { ResizeService } from '../resize.service';
import { ProjectType } from '../project-type';
import { AbstractProject } from '../abstract-project';
import { AbstractStartComponent } from '../abstract-start.component';
import { AbstractProjectComponent } from '../abstract-project.component';
import { DraggableDialogComponent } from '../draggable-dialog/draggable-dialog.component';
import { OutputPaneComponent } from '../output-pane/output-pane.component';
import { commitHash, buildTimestamp } from '../version';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  commitHash = commitHash.substr(0, 7);
  buildTimestamp = buildTimestamp;
  helpTitles = {
    'overview': 'PS Overview',
    't-test-start': 'PS Start Tab: T-Test',
    'z-test-start': 'PS Start Tab: Z-Test',
    'dichot-start': 'PS Start Tab: Dichotomous'
  };
  helpTopic = 'overview';
  showOutputPane = false;
  hoverBoxEnabled = true;
  blockSelection = false;
  urlRoot: string[];
  projectType: ProjectType;
  projects: AbstractProject[] = [];
  selectedProject: AbstractProject;
  calcSub: Subscription;
  helpSub: Subscription;
  switchedSub: Subscription;
  changedSub: Subscription;

  @ViewChild('plotOptionsDialog', { static: true }) plotOptionsDialog: DraggableDialogComponent;
  @ViewChild('helpDialog', { static: true }) helpDialog: DraggableDialogComponent;
  @ViewChild('outputPane') outputPane: OutputPaneComponent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectService: AbstractProjectService,
    private resizeService: ResizeService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.projectType = data.type as ProjectType;
      this.projects = this.projectService.getProjects(this.projectType).slice();
    });
    this.route.url.subscribe((url: UrlSegment[]) => {
      this.urlRoot = url.map((elt, i) => {
        if (i == 0) {
          return `/${elt.path}`;
        } else {
          return elt.path;
        }
      });
    });
    this.resizeService.onResize.subscribe(() => {
      if (this.outputPane) {
        this.outputPane.resize();
      }
    });
  }

  toggleHelp(topic: string): void {
    if (topic == 'start') {
      switch (this.projectType) {
        case ProjectType.TTestPaired:
        case ProjectType.TTestIndependent:
          topic = 't-test-start';
          break;
        case ProjectType.ZTest:
          topic = 'z-test-start';
          break;
        case ProjectType.Dichot:
          topic = 'dichot-start';
          break;
      }
    }

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

  exportPlots(): void {
    this.outputPane.openSaveDialog();
  }

  toggleHoverBox(): void {
    this.hoverBoxEnabled = !this.hoverBoxEnabled;
  }

  tabTitle(index: number): string {
    let result = '';
    switch (this.projectType) {
      case ProjectType.TTestPaired:
        result += 'Paired t-test ';
        break;
      case ProjectType.TTestIndependent:
        result += 'Ind. t-test ';
        break;
      case ProjectType.ZTest:
        result += 'z-test ';
        break;
      case ProjectType.Dichot:
        result += 'Dichot ';
        break;
    }
    result += ' #' + (index + 1).toString();
    return result;
  }

  startLink(): string[] {
    return this.urlRoot;
  }

  projectLink(index: number): string[] {
    return this.urlRoot.concat(`${index + 1}`);
  }

  onActivate(component: AbstractStartComponent | AbstractProjectComponent): void {
    if (component instanceof AbstractStartComponent) {
      let startComponent = component as AbstractStartComponent;
      this.calcSub = startComponent.calculate.subscribe((project: AbstractProject) => {
        this.projectService.addProject(this.projectType, project);
        this.projects.push(project);
        this.selectedProject = project;
        this.router.navigate([ this.projects.length ], { relativeTo: this.route });
      });
      this.helpSub = startComponent.toggleHelp.subscribe(() => {
        this.toggleHelp('start');
      });
      this.showOutputPane = false;

    } else if (component instanceof AbstractProjectComponent) {
      let projectComponent = component as AbstractProjectComponent;
      this.switchedSub = projectComponent.projectSwitched.subscribe((project: AbstractProject) => {
        this.selectedProject = project;
      });
      this.changedSub = projectComponent.projectChanged.subscribe(() => {
        this.redrawPlots();
      });
      this.showOutputPane = true;
    }
  }

  onDeactivate(): void {
    if (this.calcSub) {
      this.calcSub.unsubscribe();
      this.calcSub = undefined;
    }
    if (this.helpSub) {
      this.helpSub.unsubscribe();
      this.helpSub = undefined;
    }
    if (this.switchedSub) {
      this.switchedSub.unsubscribe();
      this.switchedSub = undefined;
    }
    if (this.changedSub) {
      this.changedSub.unsubscribe();
      this.changedSub = undefined;
    }
  }

  redrawPlots(): void {
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
