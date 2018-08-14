import { Observable, zip, of as observableOf } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Dichot, DichotMatched, DichotCase, DichotExpressed, DichotMethod, DichotAttribs } from './dichot';
import { DichotService } from './dichot.service';
import { Output } from '../output';

export class Project {
  models: Dichot[] = [];
  changeHistory: any[] = [];

  customRanges = false;

  constructor(private dichotService: DichotService) {}

  getOutput(): string {
    if (this.models.length > 0) {
      return this.models[0].output.toString();
    }
    return '';
  }

  getMatched(): string {
    if (this.models.length > 0) {
      return this.models[0].matched.toString();
    }
    return '';
  }

  describeMatched(): string {
    if (this.models.length > 0) {
      switch (this.models[0].matched) {
        case DichotMatched.Matched:
          return "Matched";
        case DichotMatched.Independent:
          return "Independent";
      }
    }
    return '';
  }

  describeCase(): string {
    if (this.models.length > 0) {
      switch (this.models[0].case) {
        case DichotCase.CaseControl:
          return "Case control";
        case DichotCase.Prospective:
          return "Prospective";
      }
    }
    return '';
  }

  describeExpressed(): string {
    if (this.models.length > 0) {
      switch (this.models[0].expressed) {
        case DichotExpressed.FailureRates:
          return "Failure rates";
        case DichotExpressed.RelativeRisk:
          return "Relative risk";
        case DichotExpressed.TwoProportions:
          return "Two proportions";
        case DichotExpressed.OddsRatio:
          return "Odds ratio";
      }
    }
    return '';
  }

  describeMethod(): string {
    if (this.models.length > 0) {
      switch (this.models[0].method) {
        case DichotMethod.ChiSquare:
          return "Uncorrected chi-square test";
        case DichotMethod.Fishers:
          return "Fisher's exact test";
      }
    }
    return '';
  }

  getModel(index: number): Dichot {
    return this.models[index];
  }

  addModel(model: Dichot): Observable<any> {
    return this.dichotService.calculate(model).
      pipe(mergeMap((result: DichotAttribs) => {
        let model = new Dichot(result);
        model.name = this.getModelName(this.models.length);
        this.models.push(model);
        if (!this.customRanges) {
          this.calculateRanges();
        }

        this.changeHistory.push({
          'type': 'add', 'index': this.models.length - 1,
          'params': model.attribs()
        });

        return this.updatePlotData();
      }));
  }

  updateModel(index: number, key: string, value: any): Observable<any> {
    let model = this.models[index];

    let which = key;
    let changes = { [key]: value };

    let models = [model];
    if (key === "output") {
      // If the output is changed, all models need to be updated. Additionally,
      // reset the flag to keep ranges.
      models = this.models;
      this.customRanges = false;
    }

    models.forEach(m => { Object.assign(m, changes); });
    let obs = models.map((model, i) => {
      return this.dichotService.calculate(model).pipe(
        map((result: DichotAttribs) => {
          Object.assign(model, result);
        })
      );
    });
    return zip(...obs).pipe(
      mergeMap(() => {
        if (!this.customRanges) {
          this.calculateRanges();
        }
        this.changeHistory.push({
          'type': 'change', 'index': index,
          'key': key, 'params': model.attribs()
        });
        return this.updatePlotData();
      })
    );
  }

  updatePlotData(): Observable<any> {
    /*
    let ranges = {
      nRange: this.nRange,
      powerRange: this.powerRange,
      deltaRange: this.deltaRange,
      pSpaceRange: this.pSpaceRange
    } as PlotDataRanges;

    return this.ttestService.plotData(this.models, ranges, this.pointsPerPlot).
      pipe(map((result: PlotDataResponse) => {
        if (typeof(this.pointsPerPlot) === 'undefined') {
          this.pointsPerPlot = result.points;
        }

        result.data.forEach((data, i) => {
          Object.assign(this.models[i], data);
        });

        if (this.customRanges) return;

        let output = this.getOutput();
        let nRange, powerRange, deltaRange;
        for (let i = 0, ilen = this.models.length; i < ilen; i++) {
          let model = this.models[i];
          switch (output) {
            case "n":
            case "nByCI":
              powerRange = this.makeXRange(model.nVsPower, this.nRange);
              if (i == 0) {
                this.powerRange = powerRange;
              } else {
                this.powerRange.combine(powerRange);
              }

              deltaRange = this.makeXRange(model.nVsDelta, this.nRange);
              if (i == 0) {
                this.deltaRange = deltaRange;
              } else {
                this.deltaRange.combine(deltaRange);
              }
              break;
            case "power":
              nRange = this.makeXRange(model.powerVsN, this.powerRange);
              if (i == 0) {
                this.nRange = nRange;
              } else {
                this.nRange.combine(nRange);
              }
              break;

            case "delta":
              powerRange = this.makeXRange(model.deltaVsPower, this.deltaRange);
              if (i == 0) {
                this.powerRange = powerRange;
              } else {
                this.powerRange.combine(powerRange);
              }

              nRange = this.makeXRange(model.deltaVsN, this.deltaRange);
              if (i == 0) {
                this.nRange = nRange;
              } else {
                this.nRange.combine(nRange);
              }
              break;
          }
        }

        this.previousRanges = {
          nRange: this.nRange ? this.nRange.clone() : undefined,
          powerRange: this.powerRange ? this.powerRange.clone() : undefined,
          deltaRange: this.deltaRange ? this.deltaRange.clone() : undefined,
          pSpaceRange: this.pSpaceRange ? this.pSpaceRange.clone() : undefined
        };
      }));
    */
    return observableOf('foo');
  }

  private getModelName(index: number): string {
    switch (index) {
      case 0:
        return "Primary";
      case 1:
        return "Secondary";
      case 2:
        return "Tertiary";
      case 3:
        return "Quaternary";
      case 4:
        return "Quinary";
      case 5:
        return "Senary";
      case 6:
        return "Septenary";
      case 7:
        return "Octonary";
      case 8:
        return "Nonary";
      case 9:
        return "Denary";
    }
    return `Line ${index + 1}`;
  }

  calculateRanges(): void {
    /*
    let nRange = [];
    let powerRange = [];
    let deltaRange = [];
    let pSpaceRange = [];

    let output = this.getOutput();
    let values;
    for (let i = 0, ilen = this.models.length; i < ilen; i++) {
      let model = this.models[i];

      switch (output) {
        case "n": // fall through
        case "nByCI":
          // calculate n range
          values = stableSort([model.n * 0.5, model.n * 1.5], d3.ascending);
          if (i == 0 || values[0] < nRange[0]) {
            nRange[0] = values[0];
          }
          if (i == 0 || values[1] > nRange[1]) {
            nRange[1] = values[1];
          }
          break;

        case "power":
          if (i == 0) {
            powerRange = [0.01, 1];
          }

          // calculate delta range
          values = stableSort([1.5 * model.sigma, -1.5 * model.sigma], d3.ascending);
          if (i == 0 || values[0] < deltaRange[0]) {
            deltaRange[0] = values[0];
          }
          if (i == 0 || values[1] > deltaRange[1]) {
            deltaRange[1] = values[1];
          }
          break;

        case "delta":
          // calculate delta range
          values = stableSort([model.delta * 0.5, model.delta * 1.5], d3.ascending);
          if (i == 0 || values[0] < deltaRange[0]) {
            deltaRange[0] = values[0];
          }
          if (i == 0 || values[1] > deltaRange[1]) {
            deltaRange[1] = values[1];
          }
          break;
      }

      // calculate parameter space range
      values = stableSort([1.5 * model.sigma, -1.5 * model.sigma], d3.ascending);
      if (i == 0 || values[0] < pSpaceRange[0]) {
        pSpaceRange[0] = values[0];
      }
      if (i == 0 || values[1] > pSpaceRange[1]) {
        pSpaceRange[1] = values[1];
      }

      values = [model.delta - (model.ci / 2), model.delta + (model.ci / 2)];
      if (values[0] < pSpaceRange[0]) {
        pSpaceRange[0] = values[0] - Math.abs(values[0] * 0.5);
      }
      if (values[1] > pSpaceRange[1]) {
        pSpaceRange[1] = values[1] + Math.abs(values[1] * 0.5);
      }
    }

    if (nRange.length > 0) {
      this.nRange = new Range(nRange[0], nRange[1]);
    } else {
      this.nRange = undefined;
    }

    if (powerRange.length > 0) {
      this.powerRange = new Range(powerRange[0], powerRange[1]);
    } else {
      this.powerRange = undefined;
    }

    if (deltaRange.length > 0) {
      this.deltaRange = new Range(deltaRange[0], deltaRange[1]);
    } else {
      this.deltaRange = undefined;
    }

    if (pSpaceRange.length > 0) {
      this.pSpaceRange = new Range(pSpaceRange[0], pSpaceRange[1]);
    } else {
      this.pSpaceRange = undefined;
    }
    */
  }
}
