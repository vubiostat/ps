import { Component, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs/Observable';

import { TTest } from './t-test';
import { PlotService } from './plot.service';
import { CalcService } from './calc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS: Power and Sample Size Calculation';
  newModel = new TTest();
  models: TTest[] = [
    {output: 'sampleSize', alpha: 0.05, power: 0.8, delta: 5, sigma: 10, n: 32} as TTest
  ];
  width: number;
  height: number;
  plotSource: SafeUrl;
  selectedModel: TTest;

  @ViewChild('plot') plotElement: ElementRef; // for plot width/height
  @ViewChild('tabset') tabset: NgbTabset;

  constructor(
    private plotService: PlotService,
    private calcService: CalcService,
    private sanitizer: DomSanitizer
  ) {}

  onCalculate(): void {
    this.updateModel(this.newModel).
      then(() => {
        this.models.push(Object.assign({}, this.newModel));
        setTimeout(() => {
          this.tabset.select(`test-${this.models.length}`);
        }, 100);
      }).
      catch(err => console.error(err));
  }

  onResize(): void {
    if (this.selectedModel) {
      this.getPlot(this.selectedModel);
    }
  }

  onTabChange(event: any): void {
    let md = event.nextId.match(/\d+/);
    if (md) {
      let index = md[0] - 1;
      this.selectedModel = this.models[index];
      setTimeout(() => {
        this.getPlot(this.selectedModel);
      }, 1);
    }
  }

  onModelChange(model: TTest): void {
    this.updateModel(model).
      then(() => {
        this.getPlot(model);
      });
  }

  getPlot(model: TTest): void {
    this.setDimensions();
    this.plotService.
      getPlot(model, this.width, this.height).
      then(blob => this.setPlotSource(blob)).
      catch(err => console.error(err));
  }

  updateModel(model: TTest): Promise<any> {
    switch (model.output) {
      case 'sampleSize':
        return this.calcService.calcSS(model).
          then(result => model.n = result);

      case 'power':
        return this.calcService.calcPower(model).
          then(result => model.power = result);

      case 'delta':
        return this.calcService.calcDelta(model).
          then(result => model.delta = result);
    }
  }

  private setPlotSource(blob: Blob): void {
    if (this.plotSource) {
      window.URL.revokeObjectURL(this.plotSource as string);
      this.plotSource = undefined;
    }
    this.plotSource = this.sanitizer.
      bypassSecurityTrustUrl(window.URL.createObjectURL(blob));
  }

  private setDimensions(): void {
    let elt = this.plotElement.nativeElement;
    this.width = Math.round(elt.offsetWidth * 0.90);
    this.height = elt.offsetHeight;
  }
}
