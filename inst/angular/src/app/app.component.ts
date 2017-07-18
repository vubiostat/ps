import { Component, ViewChild, OnInit } from '@angular/core';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switch';

import { TTest, TTestRanges, TTestData, TTestSet } from './t-test';
import { PlotOptions } from './plot-options';
import { TTestService } from './t-test.service';

import { PlotOptionsComponent } from './plot-options/plot-options.component'
import { OutputPaneComponent } from './output-pane/output-pane.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PS: Power and Sample Size Calculation';
  newModel = new TTest();
  modelSets: TTestSet[] = [];
  plotOptions = new PlotOptions();

  helpTopic = 'overview';
  helpOpen = false;
  plotOptionsAvailable = false;

  @ViewChild('plotOptionsChild') plotOptionsChild: PlotOptionsComponent;
  @ViewChild('tabsetChild') tabsetChild: NgbTabset;
  @ViewChild('outputPaneChild') outputChild: OutputPaneComponent;

  selectedModelSet = new Subject<TTestSet>();

  constructor(private ttestService: TTestService) {}

  ngOnInit(): void {
    let model = new TTest({
      output: 'n', alpha: 0.05, power: 0.8, delta: 5, sigma: 10, n: 32
    });
    this.addModel(model, false);
  }

  toggleHelp(topic: string): void {
    if (this.helpOpen && this.helpTopic == topic) {
      this.closeHelp();
    } else {
      this.helpTopic = topic;
      this.helpOpen = true;
    }
  }

  closeHelp(): void {
    this.helpOpen = false;
  }

  togglePlotOptions(): void {
    this.plotOptionsChild.toggle();
  }

  save(): void {
    this.outputChild.openSaveDialog();
  }

  calculate(): void {
    this.addModel(this.newModel);
  }

  onTabChange(event: any): void {
    let md = event.nextId.match(/\d+/);
    if (md) {
      let index = md[0] - 1;
      this.selectedModelSet.next(this.modelSets[index]);
      this.plotOptionsAvailable = true;
    } else {
      this.selectedModelSet.next(undefined);
      this.plotOptionsAvailable = false;
    }
  }

  addModel(model: TTest, select = true): void {
    this.ttestService.create(model).
      then(result => {
        let model = new TTest(result.model);
        let data = result.data as TTestData[];
        let modelSet = new TTestSet(model, data);
        this.modelSets.push(modelSet);

        if (select) {
          setTimeout(() => {
            this.tabsetChild.select(`test-${this.modelSets.length}`);
          }, 1);
        }
      }).
      catch(err => console.error(err));
  }
}
