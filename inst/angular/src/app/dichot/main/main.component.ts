import { Component, ViewChild, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbTabset, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { Output } from '../../output';
import { Dichot, DichotMatched, DichotCase, DichotExpressed, DichotMethod } from '../dichot';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { ResizeService } from '../../resize.service';

import { DraggableDialogComponent } from '../../draggable-dialog/draggable-dialog.component';
import { OutputPaneComponent } from '../output-pane/output-pane.component';

import { commitHash, buildTimestamp } from '../../version';

@Component({
  selector: 'dichot-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  newModel: Dichot;
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
      this.newModel = new Dichot();

      this.projects = this.projectService.getProjects();
      this.selectedIndex = this.projectService.getSelectedIndex();
      if (this.selectedIndex !== undefined) {
        this.selectedProject = this.projects[this.selectedIndex];
      }

      if (this.projects.length == 0) {
        /* Add example project */
        let model = new Dichot({
          output: Output.SampleSize, matched: DichotMatched.Matched,
          case: DichotCase.CaseControl, alpha: 0.05, power: 0.8, phi: 0.7,
          p0: 0.3, m: 1, psi: 2
        });
        this.createProject(model, false);

        model = new Dichot({
          output: Output.DetectableAlternative,
          matched: DichotMatched.Independent, case: DichotCase.Prospective,
          expressed: DichotExpressed.RelativeRisk, method: DichotMethod.ChiSquare,
          alpha: 0.05, power: 0.8, n: 200, p0: 0.3, m: 1
        });
        this.createProject(model, false);
      }
    });
  }

  tabTitle(index: number): string {
    return 'Dichot #' + (index + 1).toString();
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

  createProject(model: Dichot, select = true): void {
    let project = this.projectService.createProject();
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
}
