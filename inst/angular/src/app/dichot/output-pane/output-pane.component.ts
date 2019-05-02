import { Component, ViewChild, TemplateRef, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgbModal, NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

import { Project } from '../project';
import { Dichot } from '../dichot';
import { DichotLinePlotHandler } from '../dichot-line-plot-handler';
import { DichotCIPlotHandler } from '../dichot-ci-plot-handler';
import { LinePlotComponent } from '../../line-plot/line-plot.component';
import { BottomPlotComponent } from '../bottom-plot/bottom-plot.component';
import { ExportPlotsComponent } from '../export-plots/export-plots.component';
import { PlotOptionsService } from '../../plot-options.service';
import { PaletteService } from '../../palette.service';
import { CopyService } from '../../copy.service';

@Component({
  selector: 'dichot-output-pane',
  templateUrl: './output-pane.component.html',
  styleUrls: ['./output-pane.component.css'],
  animations: [
    trigger('overlay', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s 0.8s', style({ opacity: 0.7 }))
      ]),
      transition(':leave', [
        animate('0.5s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class OutputPaneComponent implements OnChanges {
  @Input('project') project: Project;
  @Input('hover-disabled') hoverDisabled = false;
  @Output() modelChanged = new EventEmitter();
  model: Dichot;
  linePlotHandler: DichotLinePlotHandler;
  ciPlotHandler: DichotCIPlotHandler;
  showFooter = true;
  updatingPlots = false;
  private copySub: Subscription;
  private updatingSub: Subscription;

  @ViewChild('topLeft') topLeftPlot: LinePlotComponent;
  @ViewChild('topRight') topRightPlot: LinePlotComponent;
  @ViewChild('bottom') bottomPlot: BottomPlotComponent;
  //@ViewChild('saveDialog') saveDialog: TemplateRef<any>;
  @ViewChild('footerTabset') footerTabset: NgbTabset;

  constructor(
    private modalService: NgbModal,
    private plotOptions: PlotOptionsService,
    private palette: PaletteService,
    private copyService: CopyService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!('project' in changes)) return;

    if (this.updatingSub) {
      this.updatingSub.unsubscribe();
      this.updatingSub = undefined;
    }

    if (this.project) {
      this.linePlotHandler = new DichotLinePlotHandler(this.project);
      this.ciPlotHandler = new DichotCIPlotHandler(this.project);
      this.model = this.project.getModel(this.project.selectedIndex);
      this.updatingSub = this.project.updatingPlotData.subscribe(event => {
        this.updatingPlots = true;
      });
    } else {
      this.linePlotHandler = undefined;
      this.ciPlotHandler = undefined;
      this.model = undefined;
    }
  }

  toggleFooter(value: boolean): void {
    this.showFooter = value;
    this.resize();
  }

  openSaveDialog(): void {
    const modalRef = this.modalService.open(ExportPlotsComponent, { windowClass: 'export-plots' });
    let component = modalRef.componentInstance;
    component.project = this.project;
    component.topLeftLegendXOffset = this.topLeftPlot.legendXOffset;
    component.topLeftLegendYOffset = this.topLeftPlot.legendYOffset;
    component.topRightLegendXOffset = this.topRightPlot.legendXOffset;
    component.topRightLegendYOffset = this.topRightPlot.legendYOffset;
  }

  round(n: number): number {
    return Math.round(n * 100) / 100;
  }

  ceil(n: number): number {
    return Math.ceil(n);
  }

  resize(): void {
    this.redrawPlots();
  }

  updateProject(): void {
    if (this.project) {
      this.model = this.project.getModel(this.project.selectedIndex);
    }
  }

  redrawPlots(): void {
    // Set a timeout here to let the UI resize if needed
    this.updatingPlots = false;
    setTimeout(() => {
      this.topLeftPlot.redraw();
      this.topRightPlot.redraw();
      this.bottomPlot.redraw();
    }, 1);
  }

  getIndicatorColor(): string {
    return this.palette.getColor(this.project.selectedIndex, this.plotOptions.paletteTheme);
  }

  describeChanges(changes: any): string {
    let result = [];
    for (var key in changes) {
      result.push(`<span class="code">${key}</span> was changed to <span class="code">${changes[key]}</span>`);
    }
    return result.join("; ");
  }

  copyFooter(): void {
    this.copySub = this.copyService.onCopy.subscribe(event => {
      this.onCopy(event);
    });
    document.execCommand('copy');
  }

  onCopy(event: any): void {
    switch (this.footerTabset.activeId) {
      case 'dichot-output-pane-interpretation':
        event.clipboardData.setData('text/plain', this.model.interpretation());
        event.preventDefault();
        break;
      case 'dichot-output-pane-log':
        let text = this.project.changeHistory.
          map(changes => this.project.describeChanges(changes, false)).
          join("\r\n");
        event.clipboardData.setData('text/plain', text);
        event.preventDefault();
        break;
    }
    this.copySub.unsubscribe();
  }

  onModelChanged(): void {
    this.modelChanged.emit();
  }
}
