import { Point } from '../point';
import { Range } from '../range';

export enum TTestKind {
  Paired = "paired",
  Independent = "ind",
  ZTest = "ztest"
}

export interface TTestAttribs {
  kind: TTestKind;
  output: string;
  alpha: number;
  sigma: number;
  delta?: number;
  power?: number;
  n?: number;
  m?: number;
  ci?: number;
  ciMode: boolean;
  deltaMode: boolean;
}

export interface TTestPlotData {
  nVsPower?: Point[];
  nVsDelta?: Point[];
  powerVsN?: Point[];
  powerVsDelta?: Point[];
  deltaVsPower?: Point[];
  deltaVsN?: Point[];
  sampDist: Point[];
}

export class TTest {
  name: string;

  // attributes
  kind: TTestKind;
  output: string;
  alpha: number;
  sigma: number;
  delta?: number;
  power?: number;
  n?: number;
  m?: number;
  ci?: number;
  ciMode = false;
  deltaMode = false;

  // plot data
  nVsPower?: Point[];
  nVsDelta?: Point[];
  powerVsN?: Point[];
  powerVsDelta?: Point[];
  deltaVsPower?: Point[];
  deltaVsN?: Point[];
  sampDist?: Point[];

  constructor(attribs?: any) {
    if (attribs) {
      this.kind = attribs.kind;
      this.output = attribs.output;
      this.alpha = attribs.alpha;
      this.sigma = attribs.sigma;
      this.delta = attribs.delta;
      this.power = attribs.power;
      this.n = attribs.n;
      this.m = attribs.m;
      this.ci = attribs.ci;
      this.nVsPower = attribs.nVsPower;
      this.nVsDelta = attribs.nVsDelta;
      this.powerVsN = attribs.powerVsN;
      this.powerVsDelta = attribs.powerVsDelta;
      this.deltaVsPower = attribs.deltaVsPower;
      this.deltaVsN = attribs.deltaVsN;
      this.sampDist = attribs.sampDist;
    }
  }

  precisionRange(): Range {
    return new Range(
      this.delta - (this.ci / 2),
      this.delta + (this.ci / 2)
    );
  }

  interpretation(): string {
    let alpha = this.alpha.toFixed(2);
    let sigma = this.sigma.toFixed(2);
    let delta = this.delta.toFixed(2);
    let n = Math.ceil(this.n).toString();
    let power = this.power.toFixed(2);
    let m = '', mn = '';
    if (this.m) {
      m = this.m.toFixed(2);
      mn = Math.ceil(this.m * this.n).toString();
    }

    let result = '';
    if (this.kind === TTestKind.Paired) {
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
    } else if (this.kind === TTestKind.Independent) {
      if (this.output == 'n' || this.output == 'nByCI') {
        result = `
          We are planning a study of a continuous response variable from
          independent control and experimental subjects with ${m} control(s)
          per experimental subject.  In a previous study the response within
          each subject group was normally distributed with standard deviation
          ${sigma}.  If the true difference in the experimental and control
          means is ${delta}, we will need to study ${n} experimental subjects
          and ${mn} control subjects to be able to reject the null hypothesis
          that the population means of the experimental and control groups are
          equal with probability (power) ${power}.   The Type I error
          probability associated with this test of this null hypothesis is
          ${alpha}.
        `;
      } else if (this.output == 'power') {
        result = `
          We are planning a study with ${n} experimental subjects and ${mn}
          control subjects.  In a previous study the response within each
          subject group was normally distributed with standard deviation
          ${sigma}.  If the true difference in the experimental and control
          means is ${delta}, we will be able to reject the null hypothesis that
          the population means of the experimental and control groups are equal
          with probability (power) ${power}.   The Type I error probability
          associated with this test of this null hypothesis is ${alpha}.
        `;
      } else if (this.output == 'delta') {
        result = `
          We are planning a study with ${n} experimental subjects and ${mn}
          control subjects.  In a previous study the response within each
          subject group was normally distributed with standard deviation
          ${sigma}.  We will be able to detect a true difference in the mean
          response of experimental and control subjects of -${delta} or
          ${delta} with probability (power) ${power}.   The Type I error
          probability associated with this test of the null hypothesis that the
          population means of the experimental and control groups are equal is
          ${alpha}.
        `;
      }
    }
    return result.replace(/\s+/g, " ").trim();
  }

  attribs(): TTestAttribs {
    let result: any = {
      kind: this.kind, output: this.output, alpha: this.alpha,
      sigma: this.sigma, delta: this.delta, power: this.power, n: this.n,
      m: this.m, ci: this.ci, ciMode: this.ciMode, deltaMode: this.deltaMode
    };
    console.log("TTestAttribs:", result);
    return result;
  }

  shallowClone(): TTest {
    return Object.assign(new TTest(), this);
  }
}
