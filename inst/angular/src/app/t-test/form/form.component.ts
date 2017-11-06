import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';

import { TTest, TTestRanges, TTestSet } from '../t-test';
import { TTestService } from '../t-test.service';
import { PlotOptionsService } from '../plot-options.service';
import { PaletteService } from '../palette.service';

@Component({
  selector: 't-test-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input('model-set') modelSet: TTestSet;

  model: TTest;
  min: TTest;
  max: TTest;
  extraName: string;
  extraModels: TTest[];

  constructor(
    private plotOptions: PlotOptionsService,
    private ttestService: TTestService,
    public palette: PaletteService
  ) { }

  ngOnInit(): void {
    this.model = this.modelSet.getModel(0);
    this.extraModels = this.modelSet.extraModels();
    this.model.onChange.
      debounceTime(100).
      subscribe(event => {
        this.modelChanged(0, event);
      });

    this.min = new TTest(this.model);
    this.max = new TTest(this.model);

    this.min.alpha = 0.01;
    this.max.alpha = 0.99;

    this.min.power = 0.01;
    this.max.power = 0.99;

    this.calculateSliderRange('n');
    this.calculateSliderRange('ci');
    this.calculateSliderRange('delta');
    this.calculateSliderRange('sigma');
  }

  isOutput(name: string): boolean {
    return this.model.output === name;
  }

  canAdd(name: string): boolean {
    return this.model.output !== name &&
      (this.extraName === undefined || this.extraName === name);
  }

  getColor(index: number): string {
    return this.palette.getColor(index);
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
      subscribe(event => {
        this.modelChanged(index, event);
      });
    this.extraModels = this.modelSet.extraModels();
  }

  removeInput(index: number): void {
    this.modelSet.remove(index);
    if (this.modelSet.models.length == 1) {
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

  private modelChanged(index: number, event: any): void {
    if (event.recalculation) {
      // Don't do anything, since this change came from a backend
      // recalculation.
      return;
    }

    let changes = event.changes;
    let model = this.modelSet.getModel(index);
    if (index == 0 && 'output' in changes) {
      // Output was changed, which means each model needs to be updated before
      // firing the compute event, or the plots will get confused.
      // Additionally, extra models need to be removed if they no longer make
      // sense.
      let removeExtra = (
        ((changes.output == "n" || changes.output == "nByCI") && this.extraName == "n") ||
        (changes.output == "power" && this.extraName == "power") ||
        (changes.output == "delta" && this.extraName == "delta")
      );

      let promise = this.modelSet.reduceModels(Promise.resolve(), (promise, model, index) => {
        if (index == 0 || !removeExtra) {
          model.update({ output: changes.output }, false);

          return promise.
            then(() => this.ttestService.update(model)).
            then(result => {
              this.modelSet.update(index, result.model, result.data, {}, false);
            });
        } else {
          return promise.then(() => this.removeInput(1));
        }
      });
      promise.then(() => this.modelSet.triggerCompute());
    } else {
      if (this.isOutput('nByCI')) {
        if ('delta' in changes) {
          // delta was changed, so turn on "deltaMode"
          model.deltaMode = true;

        } else if ('power' in changes) {
          // power was changed, so turn off "deltaMode"
          model.deltaMode = false;
        }
      } else if (!this.isOutput('n')) {
        if ('ci' in changes) {
          // 95% confidence interval width was changed, so turn on "ciMode"
          model.ciMode = true;

        } else if ('n' in changes) {
          // Sample size was changed, so turn off "ciMode"
          model.ciMode = false;
        }
      }
      this.updateModelSet(index);
    }
  }

  private updateModelSet(index: number): void {
    let model = this.modelSet.getModel(index);
    this.ttestService.update(model).
      then(result => {
        this.modelSet.update(index, result.model, result.data, { recalculation: true });
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

    if (model.ci < this.min.ci) {
      this.min.ci = Math.floor(model.ci);
    } else if (model.ci > this.max.ci) {
      this.max.ci = Math.ceil(model.ci);
    }
  }
}
