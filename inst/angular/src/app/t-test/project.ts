import { TTest } from './t-test';
import { Range } from './range';
import { TTestService } from './t-test.service';

export class Project {
  models: TTest[] = [];
  extraName: string;
  changeHistory: any[] = [];

  nRange?: Range;
  powerRange?: Range;
  deltaRange?: Range;
  pSpaceRange?: Range;

  constructor(private ttestService: TTestService) {}

  addModel(model: TTest): Promise<any> {
    return this.ttestService.calculate(model).
      then(result => {
        let model = new TTest(result);
        model.calculateRanges();
        this.models.push(model);
        this.calculateRanges();

        this.changeHistory.push({
          'type': 'add', 'index': this.models.length - 1,
          'params': model.params()
        });
      });
  }

  updateModel(index: number, key: string, value: any): Promise<any> {
    let model = this.models[index];

    let which = key;
    if (key === 'output') {
      if (((value == "n" || value == "nByCI") && this.extraName == "n") ||
          (value == "power" && this.extraName == "power") ||
          (value == "delta" && this.extraName == "delta")) {

        // remove extra models that no longer make sense
        for (var i = this.models.length - 1; i > 0; i--) {
          this.removeModel(i);
        }
        this.extraName = undefined;
      } else {
        // changing output is a special case because the calculated values are going
        // to be different for extra models, so these need to be fixed before recalculating
        for (let i = 1, ilen = this.models.length; i < ilen; i++) {
          let extraValue = this.models[i][this.extraName];
          Object.assign(this.models[i], this.models[0]);
          this.models[i][this.extraName] = extraValue;
        }
      }
    } else {
      if (this.models[0].output === 'nByCI') {
        if (key === 'delta') {
          // delta was changed, so turn on "deltaMode"
          model.deltaMode = true;
          model.powerMode = false;
          which = 'power';
        } else if (key === 'power') {
          // power was changed, so turn off "deltaMode"
          model.deltaMode = false;
          model.powerMode = true;
        } else {
          model.deltaMode = false;
          model.powerMode = false;
        }
      } else if (this.models[0].output !== 'n') {
        if (key === 'ci') {
          // 95% confidence interval width was changed, so turn on "ciMode"
          model.ciMode = true;
          which = 'n';

        } else if (key === 'n') {
          // Sample size was changed, so turn off "ciMode"
          model.ciMode = false;
        }
      }
    }

    let models = [model];
    if (index == 0 && which !== this.extraName) {
      // if the 'main' model was changed and the key is not the 'extra' key,
      // update all of the secondary models as well as the main model
      models = this.models;
    }

    models.forEach(m => { m[key] = value; });
    return models.reduce((promise, model) => {
      return promise.then(() => this.ttestService.calculate(model)).
        then(result => {
          console.log('before:', model.params());
          Object.assign(model, result);
          console.log('after:', model.params());
          model.calculateRanges();
        });
    }, Promise.resolve()).then(() => {
      this.calculateRanges();
      this.changeHistory.push({
        'type': 'change', 'index': index,
        'key': key, 'params': model.params()
      });
    });
  }

  removeModel(index: number): void {
    this.models.splice(index, 1);
    this.changeHistory.push({
      'type': 'remove', 'index': index
    });
    this.calculateRanges();
  }

  getModel(index: number): TTest {
    return this.models[index];
  }

  modelCount(): number {
    return this.models.length;
  }

  calculateRanges(): void {
    let nRanges = this.models.reduce((arr, m) => m.nRange ? arr.concat(m.nRange) : arr, []);
    this.nRange = nRanges.length > 0 ? Range.combine(nRanges) : undefined;

    let powerRanges = this.models.reduce((arr, m) => m.powerRange ? arr.concat(m.powerRange) : arr, []);
    this.powerRange = powerRanges.length > 0 ? Range.combine(powerRanges) : undefined;

    let deltaRanges = this.models.reduce((arr, m) => m.deltaRange ? arr.concat(m.deltaRange) : arr, []);
    this.deltaRange = deltaRanges.length > 0 ? Range.combine(deltaRanges) : undefined;

    let pSpaceRanges = this.models.reduce((arr, m) => m.pSpaceRange ? arr.concat(m.pSpaceRange) : arr, []);
    this.pSpaceRange = pSpaceRanges.length > 0 ? Range.combine(pSpaceRanges) : undefined;
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
}
