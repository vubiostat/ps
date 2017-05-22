import { Component, ViewChild, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/merge';

import { TTest, TTestRanges, TTestSet } from '../t-test';
import { PlotOptions } from '../plot-options';
import { TTestService } from '../t-test.service';
import { PlotComponent, BottomPlotComponent } from '../plot/plot.component';

@Component({
  selector: 'app-output-pane',
  templateUrl: './output-pane.component.html',
  styleUrls: ['./output-pane.component.css']
})
export class OutputPaneComponent implements OnInit {
  @Input() selectedModelSet: Observable<TTestSet>;
  @Input() plotOptions: PlotOptions;
  @ViewChild('topLeft') topLeftPlot: PlotComponent;
  @ViewChild('topRight') topRightPlot: PlotComponent;
  @ViewChild('bottom') bottomPlot: BottomPlotComponent;

  modelSet: TTestSet;
  subscription: Subscription;

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
          this.topLeftPlot.draw({ xDataKey: "power", yDataKey: "n" });
          this.topRightPlot.draw({ xDataKey: "delta", yDataKey: "n" });
          break;
        case "power":
          this.topLeftPlot.draw({ xDataKey: "n", yDataKey: "power" });
          this.topRightPlot.draw({ xDataKey: "delta", yDataKey: "powerByDelta", yRangeKey: "power", multiLine: "y" });
          break;
        case "delta":
          this.topLeftPlot.draw({ xDataKey: "n", yDataKey: "delta" });
          this.topRightPlot.draw({ xDataKey: "power", yDataKey: "delta" });
          break;
      }
      this.bottomPlot.draw({ xDataKey: "pSpace" });
    }
  }
}
