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

  constructor(attribs?: any) {
    super();
    if (attribs) {
      this.update(attribs, false);
    }
  }

  update(attribs: any, emit = true): void {
    this.noEmit = true;
    this.id = attribs.id;
    this.output = attribs.output;
    this.design = attribs.design;
    this.alpha = attribs.alpha;
    this.sigma = attribs.sigma;
    this.delta = attribs.delta;
    this.power = attribs.power;
    this.n = attribs.n;
    this.noEmit = false;
    if (emit) {
      this.emit();
    } else {
      this.changes = {};
    }
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
    return({
      id: this.id, output: this.output, design: this.design,
      alpha: this.alpha, sigma: this.sigma, delta: this.delta,
      power: this.power, n: this.n
    });
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
  defaultDelta: Range;

  private subscription = new Subscription();

  static fromArrays(attribs: any): TTestRanges {
    let result: any = {};
    result.n = Range.fromArray(attribs.n);
    result.power = Range.fromArray(attribs.power);
    result.delta = Range.fromArray(attribs.delta);
    result.pSpace = Range.fromArray(attribs.pSpace);
    result.defaultDelta = Range.fromArray(attribs.defaultDelta);
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
    this.n = ranges.n;
    this.power = ranges.power;
    this.delta = ranges.delta;
    this.pSpace = ranges.pSpace;
    this.defaultDelta = ranges.defaultDelta;
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
    result.defaultDelta = Range.fromArray(attribs.defaultDelta);
    this.update(result);
  }

  attributes(): any {
    let result: any = {};
    result.n = this.n.toArray();
    result.power = this.power.toArray();
    result.delta = this.delta.toArray();
    result.pSpace = this.pSpace.toArray();
    result.defaultDelta = this.defaultDelta.toArray();
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

interface TTestDataMember {
  values: number[];
  limits?: number[];
  target?: number;
}

export class TTestData {
  n: TTestDataMember;
  power: TTestDataMember;
  delta: TTestDataMember;
  alpha: TTestDataMember;
  pSpace: TTestDataMember;
  powerByDelta?: TTestDataMember;
}

export class TTestSet {
  onChange = new EventEmitter();

  constructor(public model: TTest, public ranges: TTestRanges, public data: TTestData) {
    model.onChange.subscribe(value => {
      this.onChange.emit({ model: value });
    });
    ranges.onChange.subscribe(value => {
      this.onChange.emit({ ranges: value });
    });
  }

  update(model: any, ranges: any, data: TTestData) {
    this.model.update(model);
    this.ranges.updateFromArrays(ranges);
    this.data = data;
  }
}
