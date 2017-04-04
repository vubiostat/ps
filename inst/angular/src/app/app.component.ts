import { Component, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs/Observable';

import { TTest } from './t-test';
import { PlotService } from './plot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS: Power and Sample Size Calculation';
  newModel = new TTest();
  models: TTest[] = [];
  width: number;
  height: number;
  plotSource: SafeUrl;
  selectedModel: TTest;

  @ViewChild('main') mainElement: ElementRef; // for plot width/height
  @ViewChild('tabset') tabset: NgbTabset;

  constructor(
    private plotService: PlotService,
    private sanitizer: DomSanitizer
  ) {}

  onCalculate(): void {
    this.models.push(Object.assign({}, this.newModel));
    setTimeout(() => {
      this.tabset.select(`test-${this.models.length}`);
    }, 100)
  }

  onTabChange(event: any): void {
    let md = event.nextId.match(/\d+/);
    if (md) {
      let index = md[0] - 1;
      this.selectedModel = this.models[index];
      this.getPlot();
    }
  }

  getPlot(): void {
    if (this.selectedModel) {
      this.setDimensions();
      this.plotService.
        getPlot(this.selectedModel, this.width, this.height).
        then(blob => this.setPlotSource(blob)).
        catch(err => console.error(err));
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
    let elt = this.mainElement.nativeElement;
    this.width = Math.round(elt.offsetWidth * 0.90);
    this.height = elt.offsetHeight;
  }
}
