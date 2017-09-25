import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';

import { TTest, TTestRanges, TTestSet } from '../t-test';
import { TTestService } from '../t-test.service';
import { PlotOptionsService } from '../plot-options.service';

@Component({
  selector: 'app-t-test',
  templateUrl: './t-test.component.html',
  styleUrls: ['./t-test.component.css']
})
export class TTestComponent implements OnInit {
  @Input('model-set') modelSet: TTestSet;

  model: TTest;
  min: TTest;
  max: TTest;
  extraName: string;
  extraModels: TTest[];

  constructor(
    private plotOptions: PlotOptionsService,
    private ttestService: TTestService
  ) { }

  ngOnInit(): void {
    this.model = this.modelSet.getModel(0);
    this.extraModels = this.modelSet.extraModels();
    this.model.onChange.
      debounceTime(100).
      subscribe(changes => {
        this.modelChanged(0, changes);
      });

    this.min = new TTest(this.model);
    this.max = new TTest(this.model);

    this.min.alpha = 0.01;
    this.max.alpha = 0.99;

    this.min.power = 0.01;
    this.max.power = 0.99;

    this.calculateSliderRange('n');
    this.calculateSliderRange('delta');
    this.calculateSliderRange('sigma');
  }

  addInput(name: any): void {
    if (this.extraName && this.extraName != name) {
      throw new Error("extra attributes must be mutually exclusive");
    }
    this.extraName = name;

    let model = this.model.clone();
    let index = this.modelSet.add(model, this.modelSet.getData(0));
    model.onChange.
      debounceTime(100).
      subscribe(changes => {
        this.modelChanged(index, changes);
      });
    this.extraModels = this.modelSet.extraModels();
  }

  removeInput(index: number): void {
    this.modelSet.remove(index);
    this.extraModels = this.modelSet.extraModels();

    if (this.modelSet.models.length == 0) {
      this.extraName = undefined;
    }
  }

  trackByExtra(index: number, item: number): number {
    return index;
  }

  private calculateSliderRange(name: string): void {
    let value = this.model[name];
    let range = [value * 0.5, value * 1.5].sort((a, b) => a - b);
    this.min[name] = range[0];
    this.max[name] = range[1];
  }

  private modelChanged(index: number, changes: any): void {
    let keys = Object.keys(changes);
    let output = this.modelSet.getModel(index).output;
    if (keys.length > 1 || keys[0] != output) {
      this.updateModelSet(index);
    }
  }

  private updateModelSet(index: number): void {
    let model = this.modelSet.getModel(index);
    this.ttestService.update(model).
      then(result => {
        this.modelSet.update(index, result.model, result.data);
        this.adjustMinMax(index);
      }, error => { });
  }

  private adjustMinMax(index: number): void {
    let model = this.modelSet.getModel(index);
    if (model.sigma < this.min.sigma) {
      this.min.sigma = Math.floor(model.sigma);
    } else if (model.sigma > this.max.sigma) {
      this.max.sigma = Math.ceil(model.sigma);
    }

    if (model.delta < this.min.delta) {
      this.min.delta = Math.floor(model.delta);
    } else if (model.delta > this.max.delta) {
      this.max.delta = Math.ceil(model.delta);
    }

    if (model.n < this.min.n) {
      this.min.n = Math.floor(model.n);
    } else if (model.n > this.max.n) {
      this.max.n = Math.ceil(model.n);
    }
  }
}
