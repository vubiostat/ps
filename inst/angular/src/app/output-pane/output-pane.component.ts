import { Component, ViewChild, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

import { Observable } from 'rxjs/Observable';

import { TTest, TTestRanges, TTestSet } from '../t-test';
import { PlotOptions } from '../plot-options';
import { PlotComponent } from '../plot/plot.component';
import { BottomPlotComponent } from '../bottom-plot/bottom-plot.component';

@Component({
  selector: 'app-output-pane',
  templateUrl: './output-pane.component.html',
  styleUrls: ['./output-pane.component.css']
})
export class OutputPaneComponent implements OnInit {
  @Input() selectedModelSet: Observable<TTestSet>;
  @Input() plotOptions: PlotOptions;
  modelSet: TTestSet;
  showText = true;

  @ViewChild('topLeft') topLeftPlot: PlotComponent;
  @ViewChild('topRight') topRightPlot: PlotComponent;
  @ViewChild('bottom') bottomPlot: BottomPlotComponent;

  ngOnInit(): void {
    this.selectedModelSet.subscribe(modelSet => {
      this.modelSet = modelSet;
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

  round(n: number): number {
    return Math.round(n * 100) / 100;
  }

  ceil(n: number): number {
    return Math.ceil(n);
  }
}
