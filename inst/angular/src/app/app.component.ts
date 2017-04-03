import { Component, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
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
export class AppComponent implements OnChanges {
  title = 'PS: Power and Sample Size Calculation';
  ttest = new TTest();
  ttests: TTest[] = [];
  width: number;
  height: number;
  plotSource: SafeUrl;
  selectedTTest: TTest;

  @ViewChild('main') mainElement: ElementRef; // for plot width/height
  @ViewChild('tabset') tabset: NgbTabset;

  constructor(
    private plotService: PlotService,
    private sanitizer: DomSanitizer
  ) {}

  onResize(): void {
    this.getPlot();
  }

  onSubmit(): void {
    this.ttests.push(Object.assign({}, this.ttest));
    setTimeout(() => {
      this.tabset.select(`test-${this.ttests.length}`);
    }, 100)
  }

  onTabChange(event: any): void {
    let md = event.nextId.match(/\d+/);
    if (md) {
      let index = md[0] - 1;
      this.selectedTTest = this.ttests[index];
      this.getPlot();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  private getPlot(): void {
    if (this.selectedTTest) {
      this.setDimensions();
      this.plotService.
        getPlot(this.selectedTTest, this.width, this.height).
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
