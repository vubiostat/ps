import { Output } from '../output';
import { Point } from '../point';

export enum DichotMatched {
  Matched = "matched",
  Independent = "independent"
}

export enum DichotCase {
  CaseControl = "caseControl",
  Prospective = "prospective"
}

export enum DichotMethod {
  ChiSquare = "chiSquare",
  Fishers = "fishers"
}

export enum DichotExpressed {
  FailureRates = "failureRates",
  RelativeRisk = "relativeRisk",
  TwoProportions = "twoProportions",
  OddsRatio = "oddsRatio"
}

export interface DichotAttribs {
  output: Output;
  matched: DichotMatched;
  case: DichotCase;
  method: DichotMethod;
  expressed: DichotExpressed;
  alpha: number;
  power: number;
  phi: number;
  p0: number;
  p1: number;
  r: number;
  n: number;
  m: number;
  psi: number;
}

export interface DichotPlotData {
  sampleSizeVsPower?: Point[];
  sampleSizeVsDetAlt?: Point[];
  powerVsSampleSize?: Point[];
  powerVsDetAlt?: Point[];
  detAltVsSampleSize?: Point[];
  detAltVsPower?: Point[];
}

export class Dichot {
  name: string;

  // attributes
  output: Output;
  matched: DichotMatched;
  case: DichotCase;
  method: DichotMethod;
  expressed: DichotExpressed;
  alpha: number;
  power: number;
  phi: number;
  p0: number;
  p1: number;
  r: number;
  n: number;
  m: number;
  psi: number;

  // plot data
  sampleSizeVsPower?: Point[];
  sampleSizeVsDetAlt?: Point[];
  powerVsSampleSize?: Point[];
  powerVsDetAlt?: Point[];
  detAltVsSampleSize?: Point[];
  detAltVsPower?: Point[];

  constructor(attribs?: any) {
    if (attribs) {
      this.name = attribs.name;
      this.output = attribs.output;
      this.matched = attribs.matched;
      this.case = attribs.case;
      this.method = attribs.method;
      this.expressed = attribs.expressed;
      this.alpha = attribs.alpha;
      this.power = attribs.power;
      this.phi = attribs.phi;
      this.p0 = attribs.p0;
      this.p1 = attribs.p1;
      this.r = attribs.r;
      this.n = attribs.n;
      this.m = attribs.m;
      this.psi = attribs.psi;
      this.sampleSizeVsPower = attribs.sampleSizeVsPower;
      this.sampleSizeVsDetAlt = attribs.sampleSizeVsDetAlt;
      this.powerVsSampleSize = attribs.powerVsSampleSize;
      this.powerVsDetAlt = attribs.powerVsDetAlt;
      this.detAltVsSampleSize = attribs.detAltVsSampleSize;
      this.detAltVsPower = attribs.detAltVsPower;
    }
  }

  attribs(): DichotAttribs {
    let result: DichotAttribs = {
      output: this.output, matched: this.matched, case: this.case,
      method: this.method, expressed: this.expressed, alpha: this.alpha,
      power: this.power, phi: this.phi, p0: this.p0, p1: this.p1, r: this.r,
      n: this.n, m: this.m, psi: this.psi
    };
    return result;
  }

  shallowClone(): Dichot {
    return Object.assign(new Dichot(), this);
  }
}
