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
import { PlotService } from '../plot.service';

@Component({
  selector: 'app-output-pane',
  templateUrl: './output-pane.component.html',
  styleUrls: ['./output-pane.component.css']
})
export class OutputPaneComponent implements OnChanges, DoCheck {
  @Input() model: TTest;
  prevModel: TTest;
  width: number;
  height: number;
  plotSource: SafeUrl;

  @ViewChild('plot') plotElement: ElementRef; // for plot width/height

  constructor(
    private plotService: PlotService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.drawPlot();
  }

  ngDoCheck(): void {
    if (!this.model) {
      return;
    }

    if (!this.prevModel) {
      this.prevModel = Object.assign({}, this.model);
      return;
    }

    let changeDetected = false;
    for (let key in this.model) {
      if (this.prevModel[key] !== this.model[key]) {
        this.prevModel[key] = this.model[key];
        changeDetected = true;
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
    if (this.model) {
      this.setDimensions();
      this.plotService.
        getPlot(this.model, this.width, this.height).
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
    this.width = Math.round(elt.offsetWidth * 0.90);
    this.height = elt.offsetHeight;
  }
}
