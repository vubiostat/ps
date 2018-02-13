import { TTest } from './t-test';
import { Range } from './range';
import { TTestService } from './t-test.service';

export class Project {
  models: TTest[] = [];
  selectedIndex: number = 0;
  changeHistory: any[] = [];

  nRange?: Range;
  powerRange?: Range;
  deltaRange?: Range;
  pSpaceRange?: Range;

  constructor(private ttestService: TTestService) {}

  getOutput(): string {
    if (this.models.length > 0) {
      return this.models[0].output;
    }
    return '';
  }

  addModel(model: TTest): Promise<any> {
    return this.ttestService.calculate(model).
      then(result => {
        let model = new TTest(result);
        model.name = this.getModelName(this.models.length);
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
      return promise.then(() => this.ttestService.calculate(model)).
        then(result => {
          Object.assign(model, result);
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
}
