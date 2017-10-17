import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TTest, TTestRanges, TTestSet } from '../t-test';
import { PlotOptionsService } from '../plot-options.service';

@Component({
  selector: 't-test-plot-options',
  templateUrl: './plot-options.component.html',
  styleUrls: ['./plot-options.component.css']
})
export class PlotOptionsComponent implements OnChanges {
  @Input('model-set') modelSet: TTestSet;
  model: TTest;
  defaultRanges: TTestRanges;
  private subscription: Subscription;

  constructor(private plotOptions: PlotOptionsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!('modelSet' in changes)) return;

    if (this.modelSet) {
      this.model = this.modelSet.getModel(0);
      this.subscription = this.modelSet.onCompute.subscribe(this.setDefaultRanges.bind(this));
      this.setDefaultRanges();
    } else {
      this.model = undefined;
      if (this.subscription) {
        this.subscription.unsubscribe();
        this.subscription = undefined;
      }
      this.defaultRanges = undefined;
    }
  }

  reset(): void {
    this.plotOptions.setDefaults();
    this.modelSet.ranges.updateFromArrays(this.defaultRanges.attributes());
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
