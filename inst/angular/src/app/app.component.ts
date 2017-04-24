import { Component, ViewChild } from '@angular/core';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

import { TTest } from './t-test';
import { CalcService } from './calc.service';
import { OutputPaneComponent } from './output-pane/output-pane.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS: Power and Sample Size Calculation';
  newModel = new TTest();
  models: TTest[] = [
    new TTest({output: 'n', alpha: 0.05, power: 0.8, delta: 5, sigma: 10, n: 32})
  ];
  selectedModel: TTest;

  @ViewChild('outputPane') outputPane: OutputPaneComponent;
  @ViewChild('tabset') tabset: NgbTabset;

  constructor(private calcService: CalcService) {}

  onCalculate(): void {
    this.updateModel(this.newModel).
      then(() => {
        let model = new TTest(this.newModel);
        this.models.push(model);
        setTimeout(() => {
          this.tabset.select(`test-${this.models.length}`);
        }, 100);
      }).
      catch(err => console.error(err));
  }

  onTabChange(event: any): void {
    let md = event.nextId.match(/\d+/);
    if (md) {
      let index = md[0] - 1;
      setTimeout(() => {
        this.selectedModel = this.models[index];
      }, 1);
    }
  }

  onModelChange(model: TTest): void {
    this.updateModel(model);
  }

  updateModel(model: TTest): Promise<any> {
    if (!model.isValid()) {
      return;
    }

    return this.calcService.calculate(model).
      then(result => {
        Object.assign(model, result);
      });
  }
}
