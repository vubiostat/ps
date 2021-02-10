import { Output } from '../output';
import { Point } from '../point';
import { DetAltMode } from '../det-alt-mode';
import { CI } from '../ci';

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
  p1Alt?: number;
  r: number;
  rAlt?: number;
  n: number;
  m: number;
  psi: number;
  psiAlt?: number;
  ci?: number[];
  ciAlt?: number[];
  detAltMode?: DetAltMode;
  ciMode?: boolean;
}

export interface DichotPlotData {
  sampleSizeVsPower?: Point[];
  sampleSizeVsDetAlt?: Point[];
  powerVsSampleSize?: Point[];
  powerVsDetAlt?: Point[];
  detAltVsSampleSize?: Point[];
  detAltVsPower?: Point[];
  sampDist?: Point[];
  ciValues?: CI[];
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
  p1Alt?: number;
  r: number;
  rAlt?: number;
  n: number;
  m: number;
  psi: number;
  psiAlt?: number;
  ci?: number[];
  ciAlt?: number[];
  detAltMode?: DetAltMode;
  ciMode?: boolean;

  // plot data
  sampleSizeVsPower?: Point[];
  sampleSizeVsDetAlt?: Point[];
  powerVsSampleSize?: Point[];
  powerVsDetAlt?: Point[];
  detAltVsSampleSize?: Point[];
  detAltVsPower?: Point[];
  sampDist?: Point[];
  ciValues?: CI[];

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
      this.p1Alt = attribs.p1Alt;
      this.r = attribs.r;
      this.rAlt = attribs.rAlt;
      this.n = attribs.n;
      this.m = attribs.m;
      this.psi = attribs.psi;
      this.psiAlt = attribs.psiAlt;
      this.ci = attribs.ci;
      this.ciAlt = attribs.ciAlt;
      this.detAltMode = attribs.detAltMode;
      this.ciMode = attribs.ciMode;
      this.sampleSizeVsPower = attribs.sampleSizeVsPower;
      this.sampleSizeVsDetAlt = attribs.sampleSizeVsDetAlt;
      this.powerVsSampleSize = attribs.powerVsSampleSize;
      this.powerVsDetAlt = attribs.powerVsDetAlt;
      this.detAltVsSampleSize = attribs.detAltVsSampleSize;
      this.detAltVsPower = attribs.detAltVsPower;
      this.sampDist = attribs.sampDist;
    }

    if (this.detAltMode === undefined || this.detAltMode === null) {
      this.detAltMode = DetAltMode.Upper;
    }
  }

  attribs(): DichotAttribs {
    let result: DichotAttribs = {
      output: this.output, matched: this.matched, case: this.case,
      method: this.method, expressed: this.expressed, alpha: this.alpha,
      power: this.power, phi: this.phi, p0: this.p0, p1: this.p1,
      p1Alt: this.p1Alt, r: this.r, rAlt: this.rAlt, n: this.n, m: this.m,
      psi: this.psi, psiAlt: this.psiAlt, ciMode: this.ciMode, ci: this.ci,
      detAltMode: this.detAltMode
    };
    return result;
  }

  shallowClone(): Dichot {
    return Object.assign(new Dichot(), this);
  }

  getDetAltParam(): string {
    let result = '';
    if (this.matched == DichotMatched.Matched) {
      result = 'psi';
    } else if (this.matched == DichotMatched.Independent) {
      if (this.expressed == DichotExpressed.TwoProportions) {
        result = 'p1';
      } else if (this.expressed == DichotExpressed.OddsRatio) {
        result = 'psi';
      } else if (this.expressed == DichotExpressed.RelativeRisk) {
        result = 'r';
      }
    }
    if (result.length > 0 && this.detAltMode === DetAltMode.Lower) {
      let name = `${result}Alt`;
      if (typeof(this[name]) === 'number') {
        result = name;
      }
    }
    return result;
  }

  getCITarget(): number {
    let target = NaN;
    if (this.matched === DichotMatched.Matched) {
      if (this.output === Output.DetectableAlternative &&
          this.detAltMode === DetAltMode.Lower) {
        target = this.psiAlt;
      } else {
        target = this.psi;
      }
    } else if (this.matched === DichotMatched.Independent) {
      let p1;
      if (this.output === Output.DetectableAlternative &&
          this.detAltMode === DetAltMode.Lower) {
        p1 = this.p1Alt;
      } else {
        p1 = this.p1;
      }

      if (this.expressed === DichotExpressed.TwoProportions) {
        target = p1;
      } else if (this.expressed === DichotExpressed.OddsRatio) {
        // p1 is calculated from psi and p0 on the backend
        target = Math.exp(Math.log(p1) + Math.log(1 - this.p0) -
          Math.log(this.p0) - Math.log(1 - p1));
      } else if (this.expressed === DichotExpressed.RelativeRisk) {
        // p1 is calculated from r and p0 on the backend
        target = Math.exp(Math.log(p1) - Math.log(this.p0));
      }
    }
    return target;
  }

  getCI(): number[] {
    if (this.output === Output.DetectableAlternative &&
        this.detAltMode === DetAltMode.Lower) {
      return this.ciAlt;
    } else {
      return this.ci;
    }
  }

  interpretation(): string {
    let result = '';

    let alpha = this.alpha.toFixed(2);
    let power = this.power.toFixed(2);
    let m = this.m.toFixed(0);
    let n = this.n.toFixed(0);
    let n2 = Math.round(this.n * this.m).toString();
    let p0 = this.p0.toFixed(2);

    let p1;
    if (this.p1) {
      p1 = this.p1.toFixed(2);
    }

    let p1Alt;
    if (this.p1Alt) {
      p1Alt = this.p1Alt.toFixed(2);
    }

    let phi;
    if (this.phi) {
      phi = this.phi.toFixed(2);
    }

    let psi;
    if (this.psi) {
      psi = this.psi.toFixed(2);
    }

    let psiAlt;
    if (this.psiAlt) {
      psiAlt = this.psiAlt.toFixed(2);
    }

    let r;
    if (this.r) {
      r = this.r.toFixed(2);
    }

    let rAlt;
    if (this.rAlt) {
      rAlt = this.rAlt.toFixed(2);
    }

    if (this.matched === DichotMatched.Matched) {
      if (this.output === Output.SampleSize) {
        result = `
          We are planning a study of matched sets of cases and controls with
          ${m} matched control(s) per case.  Prior data indicate that the
          probability of exposure among controls is ${p0} and the correlation
          coefficient for exposure between matched cases and controls is
          ${phi}.  If the true odds ratio for disease in exposed subjects
          relative to unexposed subjects is ${psi}, we will need to study ${n}
          case patients with ${m} matched control(s) per case to be able to
          reject the null hypothesis that this odds ratio equals 1 with
          probability (power) ${power}.  The Type I error probability
          associated with this test of this null hypothesis is ${alpha}.
        `;
      } else if (this.output === Output.Power) {
        result = `
          We are planning a study with ${n} matched sets of cases and controls
          and ${m} matched control(s) per case.  Prior data indicate that the
          probability of exposure among controls is ${p0} and the correlation
          coefficient for exposure between matched cases and controls is ${phi}.
          If the true odds ratio for disease in exposed subjects relative to
          unexposed subjects is ${psi}, we will be able to reject the null
          hypothesis that this odds ratio equals 1 with probability (power)
          ${power}. The Type I error probability associated with this test of this
          null hypothesis is ${alpha}.
        `;
      } else if (this.output === Output.DetectableAlternative) {
        result = `
          We are planning a study with ${n} matched sets of cases and controls
          and ${m} matched control(s) per case.  Prior data indicate that the
          probability of exposure among controls is ${p0} and the correlation
          coefficient for exposure between matched cases and controls is
          ${phi}.  We will be able to detect true odds ratios for disease of
          ${psiAlt} or ${psi} in exposed subjects relative to unexposed
          subjects with probability (power) ${power}.  The Type I error
          probability associated with this test of the null hypothesis that
          this odds ratio equals 1 is ${alpha}.
        `;
      }
    } else if (this.matched === DichotMatched.Independent) {
      if (this.case === DichotCase.CaseControl) {
        if (this.expressed === DichotExpressed.TwoProportions) {
          if (this.output === Output.SampleSize) {
            result = `
              We are planning a study of independent cases and controls with
              ${m} control(s) per case.  Prior data indicate that the
              probability of exposure among controls is ${p0}.  If the true
              probability of exposure among cases is ${p1}, we will need to
              study ${n} case patients and ${n2} control patients to be able to
              reject the null hypothesis that the exposure rates for case and
              controls are equal with probability (power) ${power}.  The Type I
              error probability associated with this test of this null
              hypothesis is ${alpha}.
            `;
          } else if (this.output === Output.Power) {
            result = `
              We are planning a study with ${n} experimental subjects and ${n2}
              control subjects.  Prior data indicate that the probability of
              exposure among controls is ${p0}.  If the true probability of
              exposure among cases is ${p1}, we will be able to reject the null
              hypothesis that the exposure rates for case and controls are
              equal with probability (power) ${power}. The Type I error
              probability associated with this test of this null hypothesis is
              ${alpha}.
            `;
          } else if (this.output === Output.DetectableAlternative) {
            result = `
              We are planning a study with ${n} experimental subjects and ${n2}
              control subjects.  Prior data indicate that the probability of
              exposure among controls is ${p0}.  We will be able to detect true
              probabilities of exposure among cases of ${p1Alt} or ${p1} with
              probability (power) ${power}.  The Type I error probability
              associated with this test of the null hypothesis that the
              exposure rates for case and controls are equal is ${alpha}.
            `;
          }
        } else if (this.expressed === DichotExpressed.OddsRatio) {
          if (this.output === Output.SampleSize) {
            result = `
              We are planning a study of independent cases and controls with
              ${m} control(s) per case.  Prior data indicate that the
              probability of exposure among controls is ${p0}.  If the true
              odds ratio for disease in exposed subjects relative to unexposed
              subjects is ${psi}, we will need to study ${n} case patients and
              ${n2} control patients to be able to reject the null hypothesis
              that this odds ratio equals 1 with probability (power) ${power}.
              The Type I error probability associated with this test of this
              null hypothesis is ${alpha}.
            `;
          } else if (this.output === Output.Power) {
            result = `
              We are planning a study with ${n} case patients and ${n2} control
              patients.  Prior data indicate that the probability of exposure
              among controls is ${p0}.  If the true odds ratio for disease in
              exposed subjects relative to unexposed subjects is ${psi}, we
              will be able to reject the null hypothesis that this odds ratio
              equals 1 with probability (power) ${power}. The Type I error
              probability associated with this test of this null hypothesis is
              ${alpha}.
            `;
          } else if (this.output === Output.DetectableAlternative) {
            result = `
              We are planning a study with ${n} case patients and ${n2} control
              patients.  Prior data indicate that the probability of exposure
              among controls is ${p0}.  We will be able to detect true odds
              ratios for disease of ${psiAlt} or ${psi} in exposed subjects
              relative to unexposed subjects with probability (power) ${power}.
              The Type I error probability associated with this test of the
              null hypothesis that this odds ratio equals 1 is ${alpha}.
            `;
          }
        }
      } else if (this.case === DichotCase.Prospective) {
        if (this.expressed === DichotExpressed.TwoProportions) {
          if (this.output === Output.SampleSize) {
            result = `
              We are planning a study of independent cases and controls with ${m}
              control(s) per case.  Prior data indicate that the failure rate
              among controls is ${p0}.  If the true failure rate for experimental
              subjects is ${p1}, we will need to study ${n} experimental subjects
              and ${n2} control subjects to be able to reject the null hypothesis
              that the failure rates for experimental and control subjects are
              equal with probability (power) ${power}.  The Type I error
              probability associated with this test of this null hypothesis is
              ${alpha}.
            `;
          } else if (this.output === Output.Power) {
            result = `
              We are planning a study with ${n} experimental subjects and ${n2}
              control subjects.  Prior data indicate that the failure rate
              among controls is ${p0}.  If the true failure rate for
              experimental subjects is ${p1}, we will be able to reject the
              null hypothesis that the failure rates for experimental and
              control subjects are equal with probability (power) ${power}. The
              Type I error probability associated with this test of this null
              hypothesis is ${alpha}.
            `;
          } else if (this.output === Output.DetectableAlternative) {
            result = `
              We are planning a study with ${n} experimental subjects and ${n2}
              control subjects.  Prior data indicate that the failure rate
              among controls is ${p0}.  We will be able to detect true failure
              rates of ${p1Alt} or ${p1} in exposed subjects with probability (power)
              ${power}.  The Type I error probability associated with this test of
              the null hypothesis that the failure rates for experimental and
              control subjects are equal is ${alpha}.
            `;
          }
        } else if (this.expressed === DichotExpressed.RelativeRisk) {
          if (this.output === Output.SampleSize) {
            result = `
              We are planning a study of independent cases and controls with
              ${m} control(s) per case.  Prior data indicate that the failure
              rate among controls is ${p0}.  If the true relative risk of
              failure for experimental subjects relative to controls is ${r},
              we will need to study ${n} experimental subjects and ${n2}
              control subjects to be able to reject the null hypothesis that
              this relative risk equals 1 with probability (power) ${power}.
              The Type I error probability associated with this test of this
              null hypothesis is ${alpha}.
            `;
          } else if (this.output === Output.Power) {
            result = `
              We are planning a study of independent cases and controls with
              ${m} control(s) per case.  Prior data indicate that the failure
              rate among controls is ${p0}.  If the true relative risk of
              failure for experimental subjects relative to controls is ${r},
              we will need to study ${n} experimental subjects and ${n2}
              control subjects to be able to reject the null hypothesis that
              this relative risk equals 1 with probability (power) ${power}.
              The Type I error probability associated with this test of this
              null hypothesis is ${alpha}.
            `;
          } else if (this.output === Output.DetectableAlternative) {
            result = `
              We are planning a study with ${n} experimental subjects and ${n2}
              control subjects.  Prior data indicate that the failure rate
              among controls is ${p0}.  We will be able to detect true relative
              risks of ${rAlt} or ${r} in exposed subjects relative to unexposed
              subjects with probability (power) ${power}.  The Type I error
              probability associated with this test of the null hypothesis that
              this relative risk equals 1 is ${alpha}.
            `;
          }
        }
      }

      if (this.method === DichotMethod.ChiSquare) {
        result += `
          We will use an uncorrected chi-squared statistic to evaluate
          this null hypothesis.
        `;
      } else if (this.method === DichotMethod.Fishers) {
        result += `
          We will use a continuity-corrected chi-squared statistic or
          Fisher’s exact test to evaluate this null hypothesis.
        `;
      }
    }

    return result.replace(/\s+/g, " ").trim();
  }
}
