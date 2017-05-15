import { Component, ViewChild, OnInit } from '@angular/core';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switch';

import { TTest, TTestRanges, TTestSet } from './t-test';
import { PlotOptions } from './plot-options';
import { TTestService } from './t-test.service';

import { PlotOptionsComponent } from './plot-options/plot-options.component'

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

  helpOpen = false;
  plotOptionsAvailable = false;

  @ViewChild('plotOptionsChild') plotOptionsChild: PlotOptionsComponent;
  @ViewChild('tabsetChild') tabsetChild: NgbTabset;

  selectedModelSet = new Subject<TTestSet>();

  constructor(private ttestService: TTestService) {}

  ngOnInit(): void {
    let model = new TTest({
      output: 'n', alpha: 0.05, power: 0.8, delta: 5, sigma: 10, n: 32
    });
    this.addModel(model, false);
  }

  toggleHelp(): void {
    this.helpOpen = !this.helpOpen;
  }

  closeHelp(): void {
    this.helpOpen = false;
  }

  togglePlotOptions(): void {
    this.plotOptionsChild.toggle();
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
    }
  }

  addModel(model: TTest, select = true): void {
    this.ttestService.create(model).
      then(result => {
        let model = new TTest(result.model);
        let ranges = TTestRanges.fromArrays(result.ranges);
        let modelSet = new TTestSet(model, ranges);
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
