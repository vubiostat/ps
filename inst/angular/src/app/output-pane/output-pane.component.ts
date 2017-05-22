import { Component, ViewChild, ElementRef, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/merge';

import { TTest, TTestRanges, TTestSet } from '../t-test';
import { Range } from '../range';
import { PlotOptions } from '../plot-options';
import { TTestService } from '../t-test.service';
import { Plotter, BottomPlotter } from '../plotter';

let plotTitles = {
  "n": "Sample Size",
  "power": "Power",
  "powerByDelta": "Power",
  "delta": "Detectable Alternative"
};

@Component({
  selector: 'app-output-pane',
  templateUrl: './output-pane.component.html',
  styleUrls: ['./output-pane.component.css']
})
export class OutputPaneComponent implements OnInit {
  @Input() selectedModelSet: Observable<TTestSet>;
  @Input() plotOptions: PlotOptions;
  modelSet: TTestSet;
  subscription: Subscription;

  @ViewChild('topLeftPlot') topLeftPlotElement: ElementRef;
  @ViewChild('topRightPlot') topRightPlotElement: ElementRef;
  @ViewChild('bottomPlot') bottomPlotElement: ElementRef;

  private topLeftPlotter: Plotter;
  private topRightPlotter: Plotter;
  private bottomPlotter: BottomPlotter;

  constructor(private ttestService: TTestService) { }

  ngOnInit(): void {
    this.topLeftPlotter = new Plotter(this.topLeftPlotElement, "top-left", this.plotOptions);
    this.topRightPlotter = new Plotter(this.topRightPlotElement, "top-right", this.plotOptions);
    this.bottomPlotter = new BottomPlotter(this.bottomPlotElement, "bottom", this.plotOptions);

    this.selectedModelSet.subscribe(modelSet => {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      this.modelSet = modelSet;

      let obs = Observable.merge(modelSet.onChange, this.plotOptions.onChange);
      this.subscription = obs.
        debounceTime(100).
        subscribe(changes => {
          this.drawPlot();
        });
      this.drawPlot();
    });
  }

  onResize(): void {
    this.drawPlot();
  }

  drawPlot(): void {
    if (this.modelSet) {
      let data = this.modelSet.data;
      let ranges = this.modelSet.ranges;

      switch (this.modelSet.model.output) {
        case "n":
          this.topLeftPlotter.draw(data.power, ranges.power, "Power", data.n, ranges.n, "Sample Size");
          this.topRightPlotter.draw(data.delta, ranges.delta, "Detectable Alternative", data.n, ranges.n, "Sample Size");
          break;
        case "power":
          this.topLeftPlotter.draw(data.n, ranges.n, "Sample Size", data.power, ranges.power, "Power");
          this.topRightPlotter.draw(data.delta, ranges.delta, "Detectable Alternative", data.powerByDelta, ranges.power, "Power", "x");
          break;
        case "delta":
          this.topLeftPlotter.draw(data.n, ranges.n, "Sample Size", data.delta, ranges.delta, "Detectable Alternative");
          this.topRightPlotter.draw(data.power, ranges.power, "Power", data.delta, ranges.delta, "Detectable Alternative");
          break;
      }
      this.bottomPlotter.draw(data.pSpace, ranges.pSpace);
    }
  }
}
