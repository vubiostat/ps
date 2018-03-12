import { TTest } from './t-test';
import { Range } from './range';
import { Point } from './point';
import { TTestService, PlotDataRanges } from './t-test.service';

import * as d3 from 'd3';
import * as stableSort from 'stable';

export interface ProjectRangeChange {
  name: string;
  which: string;
  value: number;
}

export class Project {
  models: TTest[] = [];
  selectedIndex: number = 0;
  changeHistory: any[] = [];

  nRange?: Range;
  powerRange?: Range;
  deltaRange?: Range;
  pSpaceRange?: Range;

  previousRanges: {
    nRange?: Range;
    powerRange?: Range;
    deltaRange?: Range;
    pSpaceRange?: Range;
  };

  constructor(private ttestService: TTestService) {}

  getOutput(): string {
    if (this.models.length > 0) {
      return this.models[0].output;
    }
    return '';
  }

  updateRange(change: ProjectRangeChange): Promise<any> {
    let attrib = `${change.name}Range`;
    this[attrib][change.which] = change.value;
    return this.updatePlotData(false);
  }

  updatePlotData(updateRanges = true): Promise<any> {
    let ranges = {
      nRange: this.nRange,
      powerRange: this.powerRange,
      deltaRange: this.deltaRange,
      pSpaceRange: this.pSpaceRange
    } as PlotDataRanges;

    return this.ttestService.plotData(this.models, ranges).
      then(result => {
        result.forEach((data, i) => {
          Object.assign(this.models[i], data);
        });

        if (!updateRanges) return;

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
          nRange: this.nRange,
          powerRange: this.powerRange,
          deltaRange: this.deltaRange,
          pSpaceRange: this.pSpaceRange
        };
      });
  }

  resetRanges(): void {
    if (this.previousRanges) {
      Object.assign(this, this.previousRanges);
    }
  }

  addModel(model: TTest): Promise<any> {
    return this.ttestService.calculate(model).
      then(result => {
        let model = new TTest(result);
        model.name = this.getModelName(this.models.length);
        this.models.push(model);
        this.calculateRanges();

        this.changeHistory.push({
          'type': 'add', 'index': this.models.length - 1,
          'params': model.params()
        });

        return this.updatePlotData();
      });
  }

  updateModel(index: number, key: string, value: any): Promise<any> {
    let model = this.models[index];

    let which = key;
    let changes = { [key]: value };
    if (key !== 'output') {
      if (model.output === 'nByCI') {
        if (key === 'delta') {
          // delta was changed, so turn on "deltaMode"
          changes.deltaMode = true;
          which = 'power';
        } else if (key === 'power') {
          // power was changed, so turn off "deltaMode"
          changes.deltaMode = false;
        }
      } else if (this.models[0].output !== 'n') {
        if (key === 'ci') {
          // 95% confidence interval width was changed, so turn on "ciMode"
          changes.ciMode = true;
          which = 'n';

        } else if (key === 'n') {
          // Sample size was changed, so turn off "ciMode"
          changes.ciMode = false;
        }
      }
    }

    let models = [model];
    if (key === "output") {
      models = this.models;
    }

    models.forEach(m => { Object.assign(m, changes); });
    return models.reduce((promise, model) => {
      return promise.then(() => {
        return this.ttestService.calculate(model);
      }).then(result => {
        Object.assign(model, result);
      });
    }, Promise.resolve()).then(() => {
      this.calculateRanges();
      this.changeHistory.push({
        'type': 'change', 'index': index,
        'key': key, 'params': model.params()
      });
      return this.updatePlotData();
    });
  }

  removeModel(index: number): Promise<any> {
    this.models.splice(index, 1);
    this.changeHistory.push({
      'type': 'remove', 'index': index
    });
    this.calculateRanges();
    return this.updatePlotData();
  }

  getModel(index: number): TTest {
    return this.models[index];
  }

  modelCount(): number {
    return this.models.length;
  }

  calculateRanges(): any {
    let nRange = [];
    let powerRange = [];
    let deltaRange = [];
    let pSpaceRange = [];

    let output = this.getOutput();
    let values;
    for (let i = 0, ilen = this.models.length; i < ilen; i++) {
      let model = this.models[i];

      switch (output) {
        case "n": /* fall through */
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
  }

  describeChanges(changes: any, html = true): string {
    let result;
    if (changes.type == 'add') {
      result = `Added model #${changes.index + 1}: <span class="code">${this.paramsToString(changes.params)}</span>`;

    } else if (changes.type == 'remove') {
      result = `Removed model #${changes.index + 1}`;

    } else if (changes.type == 'change') {
      if (html) {
        result = `Changed <span class="code">${changes.key}</span> in model #${changes.index + 1}: <span class="code">${this.paramsToString(changes.params)}</span>`;
      } else {
        result = `Changed ${changes.key} in model #${changes.index + 1}: ${this.paramsToString(changes.params)}`;
      }
    }
    return result;
  }

  private paramsToString(params: any): string {
    let result = [];
    for (var key in params) {
      if (key == 'ciMode' || key == 'deltaMode') {
        continue;
      }

      let value = params[key];
      if (typeof(value) === 'string') {
        result.push(`"${key}": "${params[key]}"`);
      } else {
        result.push(`"${key}": ${params[key]}`);
      }
    }
    return `{ ${result.join(', ')} }`;
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

    let values = stableSort([data[minIndex].x, data[maxIndex].x], d3.ascending);
    return new Range(values[0], values[1]);
  }
}
