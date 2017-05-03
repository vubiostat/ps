import { Component, ViewChild, OnInit } from '@angular/core';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

import { TTest } from './t-test';
import { TTestService } from './t-test.service';
import { OutputPaneComponent } from './output-pane/output-pane.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PS: Power and Sample Size Calculation';
  newModel = new TTest();
  models: TTest[] = [];
  selectedModel: TTest;
  helpOpen = false;

  @ViewChild('outputPane') outputPane: OutputPaneComponent;
  @ViewChild('tabset') tabset: NgbTabset;

  constructor(private ttestService: TTestService) {}

  ngOnInit(): void {
    let model = new TTest({
      output: 'n', alpha: 0.05, power: 0.8, delta: 5, sigma: 10, n: 32
    });
    this.addModel(model, false);
  }

  onToggleHelp(): void {
    this.helpOpen = !this.helpOpen;
  }

  onCloseHelp(): void {
    this.helpOpen = false;
  }

  onCalculate(): void {
    this.addModel(this.newModel);
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

  addModel(model: TTest, select = true): void {
    this.ttestService.create(model).
      then(result => {
        let model = new TTest(result.model);
        this.models.push(model);
        if (select) {
          setTimeout(() => {
            this.tabset.select(`test-${this.models.length}`);
          }, 1);
        }
      }).
      catch(err => console.error(err));
  }
}
