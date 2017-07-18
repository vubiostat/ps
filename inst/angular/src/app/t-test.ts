import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ChangeEmitter, Changeable } from './changeable';
import { Range } from './range';

export class TTestExtra extends ChangeEmitter {
  @Changeable alpha?: number[];
  @Changeable sigma?: number[];
  @Changeable delta?: number[];
  @Changeable power?: number[];
  @Changeable n?: number[];

  constructor(attribs: any) {
    super();

    if (Object.keys(attribs).length > 1) {
      throw new Error("elements must be mutually exclusive");
    }

    this.noEmit = true;
    if ('alpha' in attribs) {
      this.alpha = this.proxy('alpha', attribs.alpha.slice());
    } else if ('sigma' in attribs) {
      this.sigma = this.proxy('sigma', attribs.sigma.slice());
    } else if ('delta' in attribs) {
      this.delta = this.proxy('delta', attribs.delta.slice());
    } else if ('power' in attribs) {
      this.power = this.proxy('power', attribs.power.slice());
    } else if ('n' in attribs) {
      this.n = this.proxy('n', attribs.n.slice());
    }
    this.noEmit = false;
    this.changes = {};
  }

  update(attribs: any, emit = true): void {
    let keys = Object.keys(attribs);
    if (keys.length > 1) {
      throw new Error("elements must be mutually exclusive");
    }
    let key = keys[0];
    let current = this[key];
    if (current === undefined) {
      throw new Error(`invalid key: ${key}`);
    }
    let obj = attribs[key];
    if (Array.isArray(obj)) {
      // normally I'd want to catch all the change events here and combine
      // then into one event, but only one value should be changing here at a time
      obj.forEach((value, i) => {
        current[i] = value;
      });
    } else if ('replace' in obj) {
      obj = obj.replace;
      current[obj.index] = obj.value;
    } else if ('remove' in obj) {
      obj = obj.remove;
      current.splice(obj.index, 1);
    } else if ('append' in obj) {
      obj = obj.append;
      current.push(obj.value);
    }
  }

  attributes(): any {
    let result: any = {};
    if (this.alpha) {
      result.alpha = this.alpha.slice();
    } else if (this.sigma) {
      result.sigma = this.sigma.slice();
    } else if (this.delta) {
      result.delta = this.delta.slice();
    } else if (this.power) {
      result.power = this.power.slice();
    } else if (this.n) {
      result.n = this.n.slice();
    }
    return result;
  }

  push(name: string, value: number): void {
    if (this[name] === undefined) {
      throw new Error("elements must be mutually exclusive");
    }
    this.noEmit = true;
    this[name].push(value);
    this.noEmit = false;

    this.changes = { [name]: { append: { value: value } } };
    this.emit();
  }

  remove(name: string, index: number): void {
    if (this[name] === undefined) {
      throw new Error(`invalid name: ${name}`);
    }
    this.noEmit = true;
    this[name].splice(index, 1);
    this.noEmit = false;

    this.changes = { [name]: { remove: { index: index } } };
    this.emit();
  }

  isEmpty(name: string): boolean {
    if (this[name] === undefined) {
      throw new Error(`invalid name: ${name}`);
    }
    return this[name].length == 0;
  }

  round(): TTestExtra {
    let attribs = this.attributes();
    for (let key in attribs) {
      attribs[key] = attribs[key].forEach(value => {
        return Math.round(value * 100) / 100;
      });
    }
    return new TTestExtra(attribs);
  }

  private proxy(name: string, arr: number[]): any {
    let result = new Proxy(arr, {
      set: (target, property, value, receiver) => {
        if (target[property] !== value) {
          target[property] = value;
          this.changes = { [name]: { replace: { index: property, value: value } } };
          this.emit();
        }
        return true;
      }
    });
    return result;
  }
}

export class TTest extends ChangeEmitter {
  @Changeable id?: string;
  @Changeable output: string;
  @Changeable design?: string;
  @Changeable alpha: number;
  @Changeable sigma: number;
  @Changeable delta: number;
  @Changeable power: number;
  @Changeable n: number;
  @Changeable extra?: TTestExtra;

  private subscription = new Subscription();

  constructor(attribs?: any) {
    super();
    if (attribs) {
      this.update(attribs, false);
    }
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
    if ('extra' in attribs) {
      let extra = attribs.extra;
      if (extra) {
        if (!this.extra) {
          extra = extra.attributes();
          this.extra = new TTestExtra(extra);
          this.subscription = this.extra.onChange.subscribe((value) => {
            this.changes.extra = value;
            this.emit();
          });
        } else {
          this.extra.update(extra);
        }
      } else {
        this.subscription.unsubscribe();
        this.extra = undefined;
      }
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
    if (this.extra) {
      result.extra = this.extra.attributes();
    }
    return(result);
  }

  round(): TTest {
    let attribs = this.attributes();
    attribs.alpha = Math.round(attribs.alpha * 100) / 100;
    attribs.sigma = Math.round(attribs.sigma * 100) / 100;
    attribs.delta = Math.round(attribs.delta * 100) / 100;
    attribs.power = Math.round(attribs.power * 100) / 100;
    attribs.n = Math.ceil(attribs.n);
    if (this.extra) {
      attribs.extra = this.extra.round();
    }
    return new TTest(attribs);
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
  primary:    { data: { n?: number, power?: number, delta?: number }[] };
  secondary?: { data: { n?: number, power?: number, delta?: number }[] };
  tertiary?:  {
    data: { pSpace: number, sampDist: number }[],
    range: number[], target: number
  };
}

export class TTestSet {
  ranges: TTestRanges;
  onChange = new EventEmitter();
  onCompute = new EventEmitter();

  constructor(public model: TTest, public data: TTestData[]) {
    this.model.onChange.subscribe(value => {
      this.onChange.emit({ model: value });
    });

    this.calcRanges();
    this.ranges.onChange.subscribe(value => {
      this.onChange.emit({ ranges: value });
    });
  }

  update(model: any, data: TTestData[]) {
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
    let primary = this.data[0].primary;
    let tertiary = this.data[0].tertiary;
    switch (this.model.output) {
      case "n":
        values  = [this.model.n * 0.5, this.model.n * 1.5].sort((a, b) => a - b);
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
        values  = [this.model.delta * 0.5, this.model.delta * 1.5].sort((a, b) => a - b);
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

    if (!this.ranges) {
      this.ranges = new TTestRanges(attribs);
    } else {
      this.ranges.update(attribs);
    }
  }
}
