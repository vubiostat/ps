import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck
} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { TTest } from '../t-test';
import { GlobalPlotOptions } from '../plot-options';
import { PlotService } from '../plot.service';

@Component({
  selector: 'app-output-pane',
  templateUrl: './output-pane.component.html',
  styleUrls: ['./output-pane.component.css']
})
export class OutputPaneComponent implements OnChanges, DoCheck {
  @Input() model: TTest;
  prevModel: TTest;

  globalPlotOptions = new GlobalPlotOptions();
  prevGlobalPlotOptions: GlobalPlotOptions;
  showPlotOptions = false;

  @ViewChild('plot') plotElement: ElementRef; // for plot width/height
  plotSource: SafeUrl;

  constructor(
    private plotService: PlotService,
    private sanitizer: DomSanitizer
  ) {}

  togglePlotOptions(): void {
    this.showPlotOptions = !this.showPlotOptions;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.drawPlot();
  }

  ngDoCheck(): void {
    if (!this.model) {
      return;
    }

    let changeDetected = false;
    if (!this.prevModel) {
      this.prevModel = new TTest(this.model);
    } else {
      for (let key in this.model) {
        if (this.prevModel[key] !== this.model[key]) {
          this.prevModel[key] = this.model[key];
          changeDetected = true;
        }
      }
    }

    if (!this.prevGlobalPlotOptions) {
      this.prevGlobalPlotOptions = new GlobalPlotOptions();
      Object.assign(this.prevGlobalPlotOptions, this.globalPlotOptions);
    } else {
      for (let key in this.globalPlotOptions) {
        if (this.prevGlobalPlotOptions[key] !== this.globalPlotOptions[key]) {
          this.prevGlobalPlotOptions[key] = this.globalPlotOptions[key];
          changeDetected = true;
        }
      }
    }

    if (changeDetected) {
      this.drawPlot();
    }
  }

  onResize(): void {
    this.drawPlot();
  }

  drawPlot(): void {
    if (this.model && this.model.isValid()) {
      this.setDimensions();
      this.plotService.
        getPlot(this.model, this.globalPlotOptions).
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
    let elt = this.plotElement.nativeElement;
    this.globalPlotOptions.width = Math.round(elt.offsetWidth * 0.90);
    this.globalPlotOptions.height = elt.offsetHeight;
  }
}
