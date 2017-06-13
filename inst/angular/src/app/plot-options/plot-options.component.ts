import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { TTest, TTestRanges, TTestSet } from '../t-test';
import { PlotOptions } from '../plot-options';

@Component({
  selector: 'app-plot-options',
  templateUrl: './plot-options.component.html',
  styleUrls: ['./plot-options.component.css']
})
export class PlotOptionsComponent implements OnInit {
  @Input() selectedModelSet: Observable<TTestSet>;
  @Input() plotOptions: PlotOptions;
  defaultPlotOptions: PlotOptions;
  modelSet: TTestSet;
  defaultRanges: TTestRanges;
  enabled = false;

  ngOnInit() {
    this.selectedModelSet.subscribe(modelSet => {
      this.modelSet = modelSet;
      if (modelSet) {
        this.defaultRanges = TTestRanges.fromArrays(modelSet.ranges.attributes());
      }
    });
    this.defaultPlotOptions = new PlotOptions();
  }

  toggle(): void {
    this.enabled = !this.enabled;
  }

  close(): void {
    this.enabled = false;
  }

  reset(): void {
    this.plotOptions.update(this.defaultPlotOptions.attributes());
    if (this.modelSet) {
      this.modelSet.ranges.updateFromArrays(this.defaultRanges.attributes());
    }
  }

  roundFloor(n: number): number {
    return Math.floor(n * 100) / 100;
  }

  roundCeil(n: number): number {
    return Math.ceil(n * 100) / 100;
  }
}
