import { Component, ViewChild, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/merge';

import { TTest, TTestRanges, TTestSet } from '../t-test';
import { PlotOptions } from '../plot-options';
import { TTestService } from '../t-test.service';
import { PlotComponent, PlotData } from '../plot/plot.component';
import { BottomPlotComponent } from '../bottom-plot/bottom-plot.component';

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

  topLeftX: PlotData;
  topLeftY: PlotData;
  topLeftChangeName: string;
  topRightX: PlotData;
  topRightY: PlotData;
  topRightChangeName: string;

  constructor(private ttestService: TTestService) { }

  ngOnInit(): void {
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

      setTimeout(() => this.drawPlot(), 1);
    });
  }

  onResize(): void {
    this.drawPlot();
  }

  drawPlot(): void {
    if (this.modelSet) {
      switch (this.modelSet.model.output) {
        case "n":
          this.topLeftX = {
            data: this.modelSet.data.power,
            range: this.modelSet.ranges.power,
            title: "Power"
          };
          this.topLeftY = {
            data: this.modelSet.data.n,
            range: this.modelSet.ranges.n,
            title: "Sample Size"
          };
          this.topLeftChangeName = "power";

          this.topRightX = {
            data: this.modelSet.data.delta,
            range: this.modelSet.ranges.delta,
            title: "Detectable Alternative"
          };
          this.topRightY = {
            data: this.modelSet.data.n,
            range: this.modelSet.ranges.n,
            title: "Sample Size"
          };
          this.topRightChangeName = "delta";

          break;
        case "power":
          this.topLeftX = {
            data: this.modelSet.data.n,
            range: this.modelSet.ranges.n,
            title: "Sample Size"
          };
          this.topLeftY = {
            data: this.modelSet.data.power,
            range: this.modelSet.ranges.power,
            title: "Power"
          };
          this.topLeftChangeName = "n";

          this.topRightX = {
            data: this.modelSet.data.delta,
            range: this.modelSet.ranges.delta,
            title: "Detectable Alternative"
          };
          this.topRightY = {
            data: this.modelSet.data.powerByDelta,
            range: this.modelSet.ranges.power,
            title: "Power"
          };
          this.topRightChangeName = "delta";

          break;
        case "delta":
          this.topLeftX = {
            data: this.modelSet.data.n,
            range: this.modelSet.ranges.n,
            title: "Sample Size"
          };
          this.topLeftY = {
            data: this.modelSet.data.delta,
            range: this.modelSet.ranges.delta,
            title: "Detectable Alternative"
          };
          this.topLeftChangeName = "n";

          this.topRightX = {
            data: this.modelSet.data.power,
            range: this.modelSet.ranges.power,
            title: "Power"
          };
          this.topRightY = {
            data: this.modelSet.data.delta,
            range: this.modelSet.ranges.delta,
            title: "Detectable Alternative"
          };
          this.topRightChangeName = "power";

          break;
      }
    }
  }
}
