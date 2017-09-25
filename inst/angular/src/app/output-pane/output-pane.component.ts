import { Component, ViewChild, TemplateRef, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as d3 from 'd3';

import { Observable } from 'rxjs/Observable';

import { TTest, TTestRanges, TTestSet } from '../t-test';
import { PlotComponent } from '../plot/plot.component';
import { BottomPlotComponent } from '../bottom-plot/bottom-plot.component';
import { ExportPlotsComponent } from '../export-plots/export-plots.component';

@Component({
  selector: 'app-output-pane',
  templateUrl: './output-pane.component.html',
  styleUrls: ['./output-pane.component.css']
})
export class OutputPaneComponent implements OnInit {
  @Input('selected-model-set') selectedModelSet: Observable<TTestSet>;
  @Input('hover-disabled') hoverDisabled = false;
  modelSet: TTestSet;
  model: TTest;
  showText = true;

  @ViewChild('topLeft') topLeftPlot: PlotComponent;
  @ViewChild('topRight') topRightPlot: PlotComponent;
  @ViewChild('bottom') bottomPlot: BottomPlotComponent;
  @ViewChild('saveDialog') saveDialog: TemplateRef<any>;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.selectedModelSet.subscribe(modelSet => {
      this.modelSet = modelSet;
      this.model = modelSet.getModel(0);
    });
  }

  toggleText(value: boolean): void {
    this.showText = value;
    setTimeout(() => {
      this.topLeftPlot.redraw();
      this.topRightPlot.redraw();
      this.bottomPlot.redraw();
    }, 1);
  }

  openSaveDialog(): void {
    const modalRef = this.modalService.open(ExportPlotsComponent, { windowClass: 'export-plots' });
    modalRef.componentInstance.modelSet = this.modelSet;
  }

  round(n: number): number {
    return Math.round(n * 100) / 100;
  }

  ceil(n: number): number {
    return Math.ceil(n);
  }

  resize(): void {
    this.topLeftPlot.redraw();
    this.topRightPlot.redraw();
    this.bottomPlot.redraw();
  }
}
