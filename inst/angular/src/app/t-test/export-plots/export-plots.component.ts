import { Component, Input, ViewChild, ElementRef, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Project } from '../project';
import { AbstractPlotComponent } from '../abstract-plot.component';
import { PlotComponent } from '../plot/plot.component';
import { BottomPlotComponent } from '../bottom-plot/bottom-plot.component';
import { ExportService, PlotInfo, FormatsResponse, PlotsResponse } from '../export.service'

import * as stableSort from 'stable';

@Component({
  selector: 't-test-export-plots',
  templateUrl: './export-plots.component.html',
  styleUrls: ['./export-plots.component.css']
})
export class ExportPlotsComponent implements OnInit {
  @Input('project') project: Project;
  @Input('top-left-legend-x-offset') topLeftLegendXOffset: number;
  @Input('top-left-legend-y-offset') topLeftLegendYOffset: number;
  @Input('top-right-legend-x-offset') topRightLegendXOffset: number;
  @Input('top-right-legend-y-offset') topRightLegendYOffset: number;

  includeTopLeft = true;
  topLeftTitle: string;
  topLeftDim: string = "640x480";
  topLeftWidth = 640;
  topLeftHeight = 480;
  topLeftDropLines = true;
  topLeftTarget = true;

  includeTopRight = true;
  topRightTitle: string;
  topRightDim: string = "640x480";
  topRightWidth = 640;
  topRightHeight = 480;
  topRightDropLines = true;
  topRightTarget = true;

  includeBottom = true;
  bottomTitle = "Precision vs. Effect Size";
  bottomDim: string = "640x160";
  bottomWidth = 640;
  bottomHeight = 160;

  imageFormats: string[] = [];
  imageFormat = "PNG";

  @ViewChild('topLeftPlot') topLeftPlot: PlotComponent;
  @ViewChild('topRightPlot') topRightPlot: PlotComponent;
  @ViewChild('bottomPlot') bottomPlot: BottomPlotComponent;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  constructor(
    private activeModal: NgbActiveModal,
    private exportService: ExportService
  ) {}

  ngOnInit(): void {
    this.exportService.formats().then(response => {
      this.imageFormats = response.formats;

      // Make WMF the default (for now)
      stableSort.inplace(this.imageFormats, (a, b) => {
        if (a === "WMF") return -1;
        if (b === "WMF") return 1;
        if (a < b) return -1;
        if (b > a) return 1;
        return 0;
      });
    });

    switch (this.project.getModel(0).output) {
      case "n":
      case "nByCI":
        this.topLeftTitle = "Sample Size vs. Power";
        this.topRightTitle = "Sample Size vs. Detectable Alternative";
        break;
      case "power":
        this.topLeftTitle = "Power vs. Sample Size";
        this.topRightTitle = "Power vs. Detectable Alternative";
        break;
      case "delta":
        this.topLeftTitle = "Detectable Alternative vs. Sample Size";
        this.topRightTitle = "Detectable Alternative vs. Power";
        break;
    }
  }

  setDim(which: string, value: string): void {
    if (value != 'other') {
      let arr = value.split("x");
      this[`${which}Width`] = parseInt(arr[0]);
      this[`${which}Height`] = parseInt(arr[1]);
    }
  }

  serializePlot(plot: AbstractPlotComponent): string {
    let serializer = new XMLSerializer();
    return serializer.serializeToString(plot.plotElement.nativeElement);
  }

  save(): void {
    let plots: PlotInfo[] = [];
    if (this.includeTopLeft) {
      plots.push({
        name: this.topLeftTitle,
        width: this.topLeftWidth,
        height: this.topLeftHeight,
        svg: this.serializePlot(this.topLeftPlot)
      } as PlotInfo);
    }
    if (this.includeTopRight) {
      plots.push({
        name: this.topRightTitle,
        width: this.topRightWidth,
        height: this.topRightHeight,
        svg: this.serializePlot(this.topRightPlot)
      } as PlotInfo);
    }
    if (this.includeBottom) {
      plots.push({
        name: this.bottomTitle,
        width: this.bottomWidth,
        height: this.bottomHeight,
        svg: this.serializePlot(this.bottomPlot)
      } as PlotInfo);
    }

    this.exportService.plots(this.imageFormat, plots).then(response => {
      let data = atob(response.data);
      var buf = new ArrayBuffer(data.length);
      var arr = new Uint8Array(buf);
      for (var i = 0; i < data.length; i++) {
        arr[i] = data.charCodeAt(i);
      }

      let blob = new Blob([buf], { type: 'application/zip' })
      let url = URL.createObjectURL(blob);
      let elt = this.downloadLink.nativeElement;
      elt.href = url;
      elt.download = response.filename;
      elt.click();
      URL.revokeObjectURL(url);
      this.activeModal.close();
    });
  }

  cancel(): void {
    this.activeModal.close();
  }
}
