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
  @Changeable showAlternates = false;

  constructor(attribs?: any) {
    super();
    if (attribs) {
      this.update(attribs, false);
    }
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

  update(attribs: any, emit = true): any {
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
    if (attribs.showAlternates !== undefined) {
      this.showAlternates = attribs.showAlternates;
    }
    this.noEmit = false;

    let changes = this.changes;
    if (emit) {
      this.emit();
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
    this.update(attribs, emit);
  }

  isValid(): boolean {
    return this.alpha > 0 && this.alpha < 1 &&
      this.sigma > 0 &&
      (this.output == "n" || this.output == "power" || this.output == "delta") &&
      (this.output == "n" || this.n > 0) &&
      (this.output == "power" || (this.power > this.alpha && this.power < 1)) &&
      (this.output == "delta" || this.delta > 0);
  }

  attributes(): any {
    let result: any = {
      output: this.output, alpha: this.alpha, sigma: this.sigma,
      delta: this.delta, power: this.power, n: this.n
    };
    if (this.id) {
      result.id = this.id;
    }
    if (this.design) {
      result.design = this.design;
    }
    return(result);
  }
}

export interface TTestRangeArrays {
  n: number[];
  power: number[];
  delta: number[];
  pSpace: number[];
  defaultDelta: number[];
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
      let sub = child.onChange.subscribe((value) => {
        this.onChange.emit({ [name]: value });
      });
      this.subscription.add(sub);
    }
  }
}

export class TTestData {
  n: any[];
  power: any[];
  delta: any[];
  pSpace: number[];
  precision: number[];
  sampDist: number[];
  powerByDelta?: any[];
}

export class TTestSet {
  ranges: TTestRanges;
  onChange = new EventEmitter();
  onCompute = new EventEmitter();

  constructor(public model: TTest, public data: TTestData) {
    this.model.onChange.subscribe(value => {
      this.onChange.emit({ model: value });
    });

    this.calcRanges();
    this.ranges.onChange.subscribe(value => {
      this.onChange.emit({ ranges: value });
    });
  }

  update(model: any, data: TTestData) {
    let prevChanges = this.model.prevChanges;
    this.model.update(model);
    this.data = data;

    let skip;
    let changeKeys = Object.keys(prevChanges);
    if (changeKeys.length == 2 && this.model.output in prevChanges) {
      skip = changeKeys.find(k => k != this.model.output);
    }
    this.calcRanges(skip);

    this.onCompute.emit();
  }

  private calcRanges(skip?: string): void {
    let n, power, delta, pSpace, indices, values, min, max;
    let deltaMax = 2.5 * this.model.sigma;
    switch (this.model.output) {
      case "n":
        values  = [this.model.n * 0.5, this.model.n * 1.5].sort((a, b) => a - b);
        min     = Math.floor(values[0] * 100) / 100;
        max     = Math.ceil(values[1] * 100) / 100;
        n       = new Range(min, max);
        indices = n.findIndices(this.data.n);
        if (skip != 'power') {
          power = Range.fromData(indices, this.data.power[0]);
        }
        if (skip != 'delta') {
          delta = Range.fromData(indices, this.data.delta[0]);
        }
        break;

      case "power":
        power   = new Range(0, 1.0);
        indices = power.findIndices(this.data.power);
        if (skip != 'n') {
          n = Range.fromData(indices, this.data.n[0]);
        }
        if (skip != 'delta') {
          delta = new Range(-deltaMax, deltaMax);
        }
        break;

      case "delta":
        values  = [this.model.delta * 0.5, this.model.delta * 1.5].sort((a, b) => a - b);
        min     = Math.floor(values[0] * 100) / 100;
        max     = Math.ceil(values[1] * 100) / 100;
        delta   = new Range(min, max);
        indices = delta.findIndices(this.data.delta);
        if (skip != 'n') {
          n = Range.fromData(indices, this.data.n[0]);
        }
        if (skip != 'power') {
          power = Range.fromData(indices, this.data.power[0]);
        }
        break;
    }

    // parameter space
    min = -deltaMax;
    max = deltaMax;
    if (this.data.precision[0] < min) {
      min = this.data.precision[0] - Math.abs(this.data.precision[0] * 0.5);
    }
    if (this.data.precision[1] > max) {
      max = this.data.precision[1] + Math.abs(this.data.precision[1] * 0.5);
    }
    pSpace = new Range(min, max);

    let attribs: any = { pSpace: pSpace };
    if (n) attribs.n = n;
    if (power) attribs.power = power;
    if (delta) attribs.delta = delta;

    if (!this.ranges) {
      this.ranges = new TTestRanges(attribs);
    } else {
      this.ranges.update(attribs);
    }
  }
}
