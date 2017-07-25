import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

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
  private subscription: Subscription;

  ngOnInit() {
    this.selectedModelSet.subscribe(modelSet => {
      if (this.subscription) {
        this.subscription.unsubscribe();
        this.subscription = undefined;
      }
      this.modelSet = modelSet;

      if (modelSet) {
        this.subscription = modelSet.onCompute.subscribe(() => {
          this.setDefaultRanges();
        });
        this.setDefaultRanges();
      }
    });
    this.defaultPlotOptions = new PlotOptions();
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

  private setDefaultRanges(): void {
    this.defaultRanges = TTestRanges.fromArrays(this.modelSet.ranges.attributes());
  }
}
