import { Range } from './range';
import { Point } from './point';

export class TTest {
  // params
  output: string;
  alpha: number;
  sigma: number;
  delta?: number;
  power?: number;
  n?: number;
  ci?: number;
  ciMode = false;
  deltaMode = false;
  powerMode = false;

  // ranges
  nRange?: Range;
  powerRange?: Range;
  deltaRange?: Range;
  pSpaceRange?: Range;
  precisionRange?: Range;

  // data
  nVsPower?: Point[];
  nVsDelta?: Point[];
  powerVsN?: Point[];
  powerVsDelta?: Point[];
  deltaVsPower?: Point[];
  deltaVsN?: Point[];
  sampDist?: Point[];

  constructor(attribs?: any) {
    if (attribs) {
      this.output = attribs.output;
      this.alpha = attribs.alpha;
      this.sigma = attribs.sigma;
      this.delta = attribs.delta;
      this.power = attribs.power;
      this.n = attribs.n;
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

  calculateRanges(): any {
    let values, min, max;
    values = [1.5 * this.sigma, -1.5 * this.sigma].sort((a, b) => a - b);
    let deltaRange = new Range(values[0], values[1]);
    switch (this.output) {
      case "n":
      case "nByCI":
        values = [this.n * 0.5, this.n * 1.5].sort((a, b) => a - b);
        min = Math.floor(values[0] * 100) / 100;
        max = Math.ceil(values[1] * 100) / 100;
        this.nRange = new Range(min, max);
        this.powerRange = this.makeXRange(this.nVsPower, this.nRange);
        this.deltaRange = this.makeXRange(this.nVsDelta, this.nRange);
        break;

      case "power":
        this.powerRange = new Range(0, 1);
        this.nRange = this.makeXRange(this.powerVsN, this.powerRange);
        this.deltaRange = deltaRange;
        break;

      case "delta":
        values  = [this.delta * 0.5, this.delta * 1.5].sort((a, b) => a - b);
        min = Math.floor(values[0] * 100) / 100;
        max = Math.ceil(values[1] * 100) / 100;
        this.deltaRange = new Range(min, max);
        this.powerRange = this.makeXRange(this.deltaVsPower, this.deltaRange);
        this.nRange = this.makeXRange(this.deltaVsN, this.deltaRange);
        break;
    }

    this.pSpaceRange = deltaRange;
    this.precisionRange = new Range(
      this.delta - (this.ci / 2),
      this.delta + (this.ci / 2)
    );
    if (this.precisionRange.min < this.pSpaceRange.min) {
      this.pSpaceRange.min = this.precisionRange.min - Math.abs(this.precisionRange.min * 0.5);
    }
    if (this.precisionRange.max > this.pSpaceRange.max) {
      this.pSpaceRange.max = this.precisionRange.max + Math.abs(this.precisionRange.max * 0.5);
    }
  }

  params(): any {
    let result: any = {
      output: this.output, alpha: this.alpha, sigma: this.sigma,
      delta: this.delta, power: this.power, n: this.n, ci: this.ci,
      ciMode: this.ciMode, deltaMode: this.deltaMode, powerMode: this.powerMode
    };
    return result;
  }

  shallowClone(): TTest {
    return Object.assign(new TTest(), this);
  }

  private makeXRange(data: Point[], yRange: Range): Range {
    let minIndex = 0, maxIndex = data.length - 1;
    for (let i = 1; i < data.length; i++) {
      if (data[i].y >= yRange.min) {
        minIndex = i;
        break
      }
    }
    for (let i = data.length - 2; i >= 0; i--) {
      if (data[i].y <= yRange.max) {
        maxIndex = i;
        break;
      }
    }

    let values = [data[minIndex].x, data[maxIndex].x].sort((a, b) => a - b);
    return new Range(values[0], values[1]);
  }
}
