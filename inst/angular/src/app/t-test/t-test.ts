import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ChangeEmitter, Changeable } from './changeable';
import { Range } from './range';

export class TTest extends ChangeEmitter {
  @Changeable id?: string;
  @Changeable output: string;
  @Changeable design?: string;
  @Changeable alpha: number;
  @Changeable sigma: number;
  @Changeable delta: number;
  @Changeable power: number;
  @Changeable n: number;
  @Changeable ci: number;
  ciMode = false;
  deltaMode = false;

  constructor(attribs?: any) {
    super();

    if (attribs) {
      this.update(attribs, false);
    }
  }

  update(attribs: any, emit = true, eventAttribs: any = {}): any {
    this.noEmit = true;
    if (attribs.id !== undefined) {
      this.id = attribs.id;
    }
    if (attribs.output !== undefined) {
      this.output = attribs.output;
    }
    if (attribs.design !== undefined) {
      this.design = attribs.design;
    }
    if (attribs.alpha !== undefined) {
      this.alpha = attribs.alpha;
    }
    if (attribs.sigma !== undefined) {
      this.sigma = attribs.sigma;
    }
    if (attribs.delta !== undefined) {
      this.delta = attribs.delta;
    }
    if (attribs.power !== undefined) {
      this.power = attribs.power;
    }
    if (attribs.n !== undefined) {
      this.n = attribs.n;
    }
    if (attribs.ci !== undefined) {
      this.ci = attribs.ci;
    }
    if (attribs.ciMode !== undefined) {
      this.ciMode = attribs.ciMode;
    }
    if (attribs.deltaMode !== undefined) {
      this.deltaMode = attribs.deltaMode;
    }
    this.noEmit = false;

    let changes = this.changes;
    if (emit) {
      this.emit(eventAttribs);
    } else {
      this.changes = {};
    }
    return changes;
  }

  roundUpdate(attribs: any, emit = true): void {
    attribs = Object.assign({}, attribs);
    if (attribs.alpha !== undefined) {
      attribs.alpha = Math.round(attribs.alpha * 100) / 100;
    }
    if (attribs.sigma !== undefined) {
      attribs.sigma = Math.round(attribs.sigma * 100) / 100;
    }
    if (attribs.delta !== undefined) {
      attribs.delta = Math.round(attribs.delta * 100) / 100;
    }
    if (attribs.power !== undefined) {
      attribs.power = Math.round(attribs.power * 100) / 100;
    }
    if (attribs.n !== undefined) {
      attribs.n = Math.ceil(attribs.n);
    }
    if (attribs.ci !== undefined) {
      attribs.ci = Math.ceil(attribs.ci);
    }
    this.update(attribs, emit);
  }

  interpretation(): string {
    let alpha = this.alpha.toFixed(2);
    let sigma = this.sigma.toFixed(2);
    let delta = this.delta.toFixed(2);
    let n = Math.ceil(this.n);
    let power = this.power.toFixed(2);
    let result;
    if (this.output == 'n' || this.output == 'nByCI') {
      result = `
        We are planning a study of a continuous response variable from matched
        pairs of study subjects. Prior data indicate that the difference in the
        response of matched pairs is normally distributed with standard
        deviation ${sigma}. If the true difference in the mean response of
        matched pairs is ${delta}, we will need to study ${n} pairs of subjects
        to be able to reject the null hypothesis that this response difference
        is zero with probability (power) ${power}. The Type I error probability
        associated with this test of this null hypothesis is ${alpha}.
      `;
    } else if (this.output == 'power') {
      result = `
        We are planning a study with ${n} pairs of subjects. Prior data
        indicate that the difference in the response of matched pairs is
        normally distributed with standard deviation ${sigma}. If the true
        difference in the mean response of matched pairs is ${delta}, we will
        be able to reject the null hypothesis that this response difference is
        zero with probability (power) ${power}. The Type I error probability
        associated with this test of this null hypothesis is ${alpha}.
      `;
    } else if (this.output == 'delta') {
      result = `
        We are planning a study with ${n} pairs of subjects. Prior data
        indicate that the difference in the response of matched pairs is
        normally distributed with standard deviation ${sigma}. We will be able
        to detect a true difference in the mean response of matched pairs of
        -${delta} or ${delta} with probability (power) ${power}. The Type I
        error probability associated with this test of the null hypothesis that
        this response difference is zero is ${alpha}.
      `;
    }
    return result.replace(/\s+/g, " ").trim();
  }

  attributes(): any {
    let result: any = {
      output: this.output, alpha: this.alpha, sigma: this.sigma,
      delta: this.delta, power: this.power, n: this.n, ci: this.ci,
      ciMode: this.ciMode, deltaMode: this.deltaMode
    };
    if (this.id) {
      result.id = this.id;
    }
    if (this.design) {
      result.design = this.design;
    }
    return result;
  }

  round(): TTest {
    let attribs = this.attributes();
    attribs.alpha = Math.round(attribs.alpha * 100) / 100;
    attribs.sigma = Math.round(attribs.sigma * 100) / 100;
    attribs.delta = Math.round(attribs.delta * 100) / 100;
    attribs.power = Math.round(attribs.power * 100) / 100;
    attribs.n = Math.ceil(attribs.n);
    return new TTest(attribs);
  }

  clone(): TTest {
    return new TTest(this.attributes());
  }
}

export class TTestRanges extends ChangeEmitter {
  @Changeable n: Range;
  @Changeable power: Range;
  @Changeable delta: Range;
  @Changeable pSpace: Range;

  private subscription = new Subscription();

  static fromArrays(attribs: any): TTestRanges {
    let result: any = {};
    result.n = Range.fromArray(attribs.n);
    result.power = Range.fromArray(attribs.power);
    result.delta = Range.fromArray(attribs.delta);
    result.pSpace = Range.fromArray(attribs.pSpace);
    return new TTestRanges(result);
  }

  constructor(attribs?: any) {
    super();
    if (attribs) {
      this.update(attribs, false);
    }
  }

  update(ranges: any, emit = true): void {
    this.subscription.unsubscribe();

    this.noEmit = true;
    if ('n' in ranges) {
      this.n = ranges.n;
    }
    if ('power' in ranges) {
      this.power = ranges.power;
    }
    if ('delta' in ranges) {
      this.delta = ranges.delta;
    }
    if ('pSpace' in ranges) {
      this.pSpace = ranges.pSpace;
    }
    this.noEmit = false;

    this.subscribeToChildren();

    if (emit) {
      this.emit();
    } else {
      this.changes = {};
    }
  }

  updateFromArrays(attribs: any) {
    let result: any = {};
    result.n = Range.fromArray(attribs.n);
    result.power = Range.fromArray(attribs.power);
    result.delta = Range.fromArray(attribs.delta);
    result.pSpace = Range.fromArray(attribs.pSpace);
    this.update(result);
  }

  attributes(): any {
    let result: any = {};
    result.n = this.n.toArray();
    result.power = this.power.toArray();
    result.delta = this.delta.toArray();
    result.pSpace = this.pSpace.toArray();
    return result;
  }

  private subscribeToChildren(): void {
    this.subscription = new Subscription();
    this.subscribeToChild("n");
    this.subscribeToChild("power");
    this.subscribeToChild("delta");
    this.subscribeToChild("pSpace");
  }

  private subscribeToChild(name: string): void {
    let child = this[name];
    if (child) {
      let sub = child.onChange.subscribe((childEvent: any) => {
        let event: any = {};
        for (var key in childEvent) {
          if (key == 'changes') {
            event.changes = { [name]: childEvent.changes };
          } else {
            event[key] = childEvent[key];
          }
        }
        this.onChange.emit(event);
      });
      this.subscription.add(sub);
    }
  }
}

export class TTestData {
  primary:    { data: { n?: number, power?: number, delta?: number }[] };
  secondary?: { data: { n?: number, power?: number, delta?: number }[] };
  tertiary?:  {
    data: { pSpace: number, sampDist: number }[],
    range: number[], target: number
  };
}

export class TTestSet {
  models: { model: TTest, data: TTestData }[] = [];
  ranges: TTestRanges;
  extraName: string;
  onChange = new EventEmitter();
  onCompute = new EventEmitter();

  private rangeSub: Subscription;

  add(model: TTest, data: TTestData): number {
    let index = this.models.length;
    this.models.push({ model: model, data: data });

    if (this.models.length == 1) {
      let attribs = this.calcRangeAttributes(model, data);
      this.ranges = new TTestRanges(attribs);
      this.rangeSub = this.ranges.onChange.subscribe(value => {
        this.onChange.emit({ ranges: value });
      });
    }
    this.onChange.emit({ added: index });
    return index;
  }

  getModel(index: number): TTest {
    return this.models[index].model;
  }

  getData(index: number): TTestData {
    return this.models[index].data;
  }

  update(index: number, modelChanges: any, data: TTestData, eventAttribs: any = {}, emit = true) {
    let model = this.models[index].model;
    this.models[index].data = data;

    let prevChanges = model.prevChanges;
    model.update(modelChanges, emit, eventAttribs);

    if (index == 0) {
      let skip;
      let changeKeys = Object.keys(prevChanges);
      if (changeKeys.length == 2 && model.output in prevChanges) {
        skip = changeKeys.find(k => k != model.output);
      }
      let attribs = this.calcRangeAttributes(model, data, skip);
      this.ranges.update(attribs, emit);
    }

    if (emit) {
      this.onCompute.emit();
    }
  }

  triggerCompute(): void {
    this.onCompute.emit();
  }

  remove(index: number): void {
    if (index == 0) {
      throw new Error("can't remove first model");
    }
    let m = this.models[index];
    m.model.onChange.complete();
    this.models.splice(index, 1);
    this.onChange.emit({ removed: index });
  }

  extraModels(): TTest[] {
    return this.models.slice(1).map(m => m.model);
  }

  reduceModels(initial: any, callback: Function): any {
    return this.models.reduce((a, m, i) => {
      return callback(a, m.model, i);
    }, initial);
  }

  mapModels(callback: Function): any {
    return this.models.map((m, i) => {
      return callback(m.model, i);
    });
  }

  getModels(): TTest[] {
    return this.mapModels(m => m);
  }

  private calcRangeAttributes(model: TTest, data: TTestData, skip?: string): any {
    let n, power, delta, pSpace, indices, values, min, max;
    let deltaMax = 1.5 * model.sigma;
    let primary = data.primary;
    let tertiary = data.tertiary;
    switch (model.output) {
      case "n":
      case "nByCI":
        values  = [model.n * 0.5, model.n * 1.5].sort((a, b) => a - b);
        min     = Math.floor(values[0] * 100) / 100;
        max     = Math.ceil(values[1] * 100) / 100;
        n       = new Range(min, max);
        indices = n.findIndices(primary.data, 'n');
        if (skip != 'power') {
          power = Range.fromData(indices, primary.data, 'power');
        }
        if (skip != 'delta') {
          delta = Range.fromData(indices, primary.data, 'delta');
        }
        break;

      case "power":
        power   = new Range(0, 1.0);
        indices = power.findIndices(primary.data, 'power');
        if (skip != 'n') {
          n = Range.fromData(indices, primary.data, 'n');
        }
        if (skip != 'delta') {
          delta = new Range(-deltaMax, deltaMax);
        }
        break;

      case "delta":
        values  = [model.delta * 0.5, model.delta * 1.5].sort((a, b) => a - b);
        min     = Math.floor(values[0] * 100) / 100;
        max     = Math.ceil(values[1] * 100) / 100;
        delta   = new Range(min, max);
        indices = delta.findIndices(primary.data, 'delta');
        if (skip != 'n') {
          n = Range.fromData(indices, primary.data, 'n');
        }
        if (skip != 'power') {
          power = Range.fromData(indices, primary.data, 'power');
        }
        break;
    }

    // parameter space
    min = -deltaMax;
    max = deltaMax;
    if (tertiary.range[0] < min) {
      min = tertiary.range[0] - Math.abs(tertiary.range[0] * 0.5);
    }
    if (tertiary.range[1] > max) {
      max = tertiary.range[1] + Math.abs(tertiary.range[1] * 0.5);
    }
    pSpace = new Range(min, max);

    let attribs: any = { pSpace: pSpace };
    if (n) attribs.n = n;
    if (power) attribs.power = power;
    if (delta) attribs.delta = delta;

    return attribs;
  }
}
